import { NextResponse } from "next/server";
import Stripe from "stripe";

// Initialize Stripe with the secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
});

export async function POST() {
  try {
    console.log('Creating checkout session with price:', process.env.STRIPE_PRICE_ID);
    
    // Create the checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/calendar?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/services`,
      metadata: {
        type: "consultation",
        duration: "30 minutes",
      },
    });

    console.log('Checkout session created:', session.id);
    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error("Stripe error details:", {
      message: error.message,
      type: error.type,
      code: error.code,
      param: error.param,
      priceId: process.env.STRIPE_PRICE_ID,
      baseUrl: process.env.NEXT_PUBLIC_BASE_URL
    });
    
    // Handle different types of Stripe errors
    if (error instanceof Stripe.errors.StripeError) {
      return NextResponse.json(
        { error: `Payment service error: ${error.message}` },
        { status: error.statusCode || 500 }
      );
    }

    // Handle other errors
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
} 