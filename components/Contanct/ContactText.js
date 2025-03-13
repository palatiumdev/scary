"use client";

import { loadStripe } from "@stripe/stripe-js";
import Button from "../Button/Button";
import { useState } from "react";
import { BsCalendar3 } from "react-icons/bs";

// Initialize Stripe with public key from environment variable
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function ContactText({ contact, contactButtonText }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCheckout = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      console.log('Initiating checkout process...');
      console.log('Using publishable key:', process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY?.slice(0, 8) + '...');
      
      // Get Stripe instance early to catch initialization errors
      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error("Failed to initialize Stripe. Please check your publishable key.");
      }
      
      // Create checkout session
      const response = await fetch("/api/stripe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      
      if (!response.ok) {
        console.error('Checkout session creation failed:', data);
        throw new Error(data.error || "Failed to create checkout session");
      }

      console.log('Checkout session created:', data.sessionId);
      
      // Redirect to checkout
      const { error: checkoutError } = await stripe.redirectToCheckout({
        sessionId: data.sessionId,
      });

      if (checkoutError) {
        console.error('Stripe redirect error:', {
          message: checkoutError.message,
          type: checkoutError.type,
          code: checkoutError.code
        });
        throw checkoutError;
      }
    } catch (error) {
      console.error("Detailed checkout error:", {
        message: error.message,
        name: error.name,
        stack: error.stack,
        stripeInitialized: Boolean(await stripePromise)
      });
      
      // More user-friendly error messages
      let errorMessage = "Unable to process payment. Please try again later.";
      if (error.message.includes("publishable key")) {
        errorMessage = "Payment system configuration error. Please contact support.";
      } else if (error.message.includes("session")) {
        errorMessage = "Unable to start checkout. Please try again.";
      }
      
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="prose prose-invert max-w-none text-xl">
        {contact}
      </div>
      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}
      <Button
        onClick={handleCheckout}
        disabled={isLoading}
        size="lg"
        className="bg-primary hover:bg-primary/80 text-black px-8 py-6 text-xl rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed h-auto"
      >
        <BsCalendar3 className="mr-2 h-5 w-5" />
        {isLoading ? "Processing..." : contactButtonText}
      </Button>
    </div>
  );
} 