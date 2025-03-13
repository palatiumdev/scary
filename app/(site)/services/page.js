"use client";

import { FaStar } from "react-icons/fa6";
import { BsCameraVideo, BsCalendar3, BsChatDots } from "react-icons/bs";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { loadStripe } from "@stripe/stripe-js";

// Initialize Stripe with public key from environment variable
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const creatorReviews = [
  {
    name: "Xen",
    profileImage: "/creatives/xen.png",
    subscribers: "159.000 Subscribers",
    review: "Scary is an exceptional talent. From ideation, editing, or being on camera he is able to do it all. He shows great leadership in day to day business helping our company run seamlessly from the production standpoint. Scary is definitely someone you want to work with!"
  },
  {
    name: "hxsain",
    profileImage: "/creatives/hxsain.png",
    subscribers: "2.610.000 Subscribers",
    review: "Scary made it very easy for me to trust him and put my faith in him. gave him the run down + the idea on what i wanted, and he executed the project perfectly, without a single second draft needed. he is truly exceptional at what he does"
  },
  {
    name: "Grxnt",
    profileImage: "/creatives/grxnt.png",
    subscribers: "875.000 Subscribers",
    review: "I have really have enjoyed working with Scary. For starters, the communion is always there. He is extremely responsive, and always on time. Let's not forget as well, he lets me make revisions until I am satisfied. It's important to have an editor that wants it just as badly as you do and Scary is that guy."
  },
  {
    name: "CPreds",
    profileImage: "/creatives/cpreds.png",
    subscribers: "317.000 Subscribers",
    review: "Scary is dedicated, will work hard, and communicate better than a lot of other editors out there"
  }
];

const creativeReviews = [
  {
    name: "Gabriel \"Sense1\" G.",
    profileImage: "/creatives/sense1.png",
    review: "Scary is the hardest working person I know and he helps large creators really take their content to new heights with his services. Can't recommend him enough"
  },
  {
    name: "Nicolepotts",
    profileImage: "/creatives/nicolepotts.png",
    review: "I have never seen someone with work ethic as good as Scary and on top of that he is a great person!:)"
  },
  {
    name: "bluffmadechris",
    profileImage: "/creatives/bluffmadechris.png",
    review: "Scary is an amazing content manager who provides great results for creators. Quick response times, super reliable, and always online helping his clients and team. His work ethic is unmatched!"
  },
  {
    name: "M7V",
    profileImage: "/creatives/m7v.png",
    review: "Scary is a video editing goat, he's well organized, communicates clearly, and ensures everything stays on track!"
  },
  {
    name: "Palatium",
    profileImage: "/creatives/palatium.png",
    review: "Working with Scary is easy. He's organized, clear in his communication, and keeps everything on track!"
  }
];

export default function Services() {
  const [openFaq, setOpenFaq] = useState(null);
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
    <main className="py-8">
      <div className="container mx-auto max-w-5xl px-4">
        {/* Main Consultation Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.5fr,1fr] gap-6 mb-8">
          {/* Left Column - Large Profile Picture */}
          <div className="relative aspect-square w-full rounded-3xl overflow-hidden">
            <Image
              src="/logo2.png"
              alt="Profile"
              width={400}
              height={400}
              className="object-cover w-full h-full"
              priority
              quality={100}
            />
          </div>

          {/* Middle Column - Info */}
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-4xl font-bold text-primary">1:1 Video Consultation</h1>
            <p className="text-lg text-white">
              Book a 1:1 video call with Scary to get personalized advice and strategies for your content creation journey.
            </p>
            
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-primary" />
                ))}
              </div>
              <span className="text-lg">5.0 (14 reviews)</span>
            </div>

            <div className="text-lg">
              <p>Starting at $30.00/30min</p>
              <p className="text-gray-400">Next available — Check calendar</p>
            </div>

            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}

            <button 
              onClick={handleCheckout}
              disabled={isLoading}
              className="bg-primary text-black font-bold py-3 px-6 rounded-xl hover:bg-primary/80 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <BsCalendar3 className="text-xl" />
              {isLoading ? "Processing..." : "Book a call"}
            </button>
          </div>

          {/* Right Column - What's included */}
          <div className="bg-BGaccent rounded-3xl p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-primary mb-4">What's included:</h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <BsChatDots className="text-primary" size={20} />
                <span>15-minute consultation call</span>
              </li>
              <li className="flex items-center gap-3">
                <BsCalendar3 className="text-primary" size={20} />
                <span>Flexible scheduling</span>
              </li>
              <li className="flex items-center gap-3">
                <BsCameraVideo className="text-primary" size={20} />
                <span>1:1 personalized advice</span>
              </li>
            </ul>
          </div>
        </div>

        {/* What to Expect Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">What to expect</h2>
          <div className="bg-BGaccent rounded-3xl p-6">
            <h3 className="text-xl mb-3">15 minute session</h3>
            <ul className="space-y-2 list-disc list-inside text-white">
              <li>Review your current content</li>
              <li>Personalized tips for improvement</li>
              <li>Software-specific advice (Premiere Pro)</li>
              <li>Strategy for growing your audience</li>
            </ul>
          </div>
        </div>

        {/* How it works */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-4">How it works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-BGaccent rounded-3xl p-6 text-center">
              <div className="flex justify-center mb-3">
                <BsCalendar3 size={30} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Book a time</h3>
              <p className="text-white">Select a time that works best for your schedule</p>
            </div>
            <div className="bg-BGaccent rounded-3xl p-6 text-center">
              <div className="flex justify-center mb-3">
                <BsCameraVideo size={30} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Join the call</h3>
              <p className="text-white">Connect via video call at your scheduled time</p>
            </div>
            <div className="bg-BGaccent rounded-3xl p-6 text-center">
              <div className="flex justify-center mb-3">
                <BsChatDots size={30} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Get advice</h3>
              <p className="text-white">Receive personalized guidance and actionable tips</p>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-primary">Why it's valuable</h2>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-primary" />
                ))}
              </div>
              <span>5.0 (14)</span>
            </div>
          </div>
          
          <div className="w-full">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={3}
              loop={true}
              speed={1500}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              className="overflow-hidden"
              breakpoints={{
                0: {
                  slidesPerView: 3,
                },
                640: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 3,
                }
              }}
            >
              {/* Creator Reviews */}
              {[...creatorReviews, ...creativeReviews].map((review, i) => (
                <SwiperSlide key={i}>
                  <div className="bg-BGaccent rounded-2xl p-6 h-[240px] w-full flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="relative w-10 h-10 shrink-0 rounded-full overflow-hidden">
                        <Image
                          src={review.profileImage}
                          alt={review.name}
                          fill
                          sizes="40px"
                          className="object-cover"
                        />
                      </div>
                      <h3 className="text-base font-semibold truncate">{review.name}</h3>
                    </div>
                    <p className="text-[13px] text-gray-200 line-clamp-8 flex-1">{review.review}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* FAQ Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-primary mb-4">Common questions</h2>
          <div className="space-y-4">
            {[
              {
                question: "How does the video consultation work?",
                answer: "After scheduling a meeting with Scary, he will introduce himself in call and then be open to answering any and all questions you may have regarding your business within the allotted time you have scheduled for!"
              },
              {
                question: "What should I prepare beforehand?",
                answer: "Any questions you may have as well a note pad to write everything down! However if you'd like to review a piece of content or analyze a social media account, it's best to come prepared with your product on hand and ready!"
              }
            ].map((faq, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="border-b border-gray-700 pb-4"
              >
                <motion.button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex justify-between items-center w-full text-left py-4 hover:text-primary transition-colors"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  <motion.span 
                    className="text-2xl text-primary"
                    animate={{ rotate: openFaq === i ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    +
                  </motion.span>
                </motion.button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <motion.div 
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-gray-300 pb-4 pt-2 text-lg"
                      >
                        {faq.answer}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}