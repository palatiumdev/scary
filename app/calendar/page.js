import { Suspense } from "react";
import { redirect } from "next/navigation";
import Stripe from "stripe";

// Initialize Stripe with the secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
  typescript: true,
});

export default async function CalendarPage({ searchParams }) {
  const sessionId = searchParams?.session_id;

  if (!sessionId) {
    console.warn("No session ID provided");
    redirect("/services");
  }

  try {
    // Verify payment status with Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    
    // If payment is not complete, redirect to services
    if (session.payment_status !== "paid") {
      console.warn("Payment not completed for session:", sessionId);
      redirect("/services");
    }

    // Verify session hasn't expired (48 hours)
    const sessionAge = Date.now() - (session.created * 1000);
    if (sessionAge > 48 * 60 * 60 * 1000) {
      console.warn("Session expired:", sessionId);
      redirect("/services");
    }

    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-8 py-16 px-5 lg:px-16">
        <h1 className="text-4xl text-primary font-bold">Book Your Consultation</h1>
        <p className="text-xl text-center max-w-2xl">
          Thank you for your payment! Please select a time slot that works best for you.
        </p>
        <div className="w-full max-w-4xl bg-BGaccent p-8 rounded-2xl">
          <Suspense 
            fallback={
              <div className="flex items-center justify-center h-[600px]">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
              </div>
            }
          >
            <iframe
              src="https://calendar.app.google/WBWkPn5eSNKvDN3R6"
              style={{ border: 0 }}
              width="100%"
              height="600"
              frameBorder="0"
              title="Consultation Booking Calendar"
            ></iframe>
          </Suspense>
        </div>
      </main>
    );
  } catch (error) {
    console.error("Error verifying payment:", error);
    
    // Handle different types of Stripe errors
    if (error instanceof Stripe.errors.StripeError) {
      console.error("Stripe error:", {
        code: error.code,
        type: error.type,
        sessionId
      });
    }
    
    redirect("/services");
  }
} 