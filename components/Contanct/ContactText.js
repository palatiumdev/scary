"use client";

import { loadStripe } from "@stripe/stripe-js";
import Button from "../Button/Button";
import { useState } from "react";
import { BsCalendar3 } from "react-icons/bs";

// Initialize Stripe with public key from environment variable
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function ContactText({ contact, contactButtonText }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCheckout = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Create checkout session
      const response = await fetch("/api/stripe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to create checkout session");
      }

      const { sessionId } = await response.json();
      
      // Get Stripe instance
      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error("Failed to initialize payment system");
      }

      // Redirect to checkout
      const { error: checkoutError } = await stripe.redirectToCheckout({
        sessionId,
      });

      if (checkoutError) {
        throw checkoutError;
      }
    } catch (error) {
      console.error("Checkout error:", error);
      setError("Unable to process payment. Please try again later.");
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