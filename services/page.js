"use client";
import { useState, useEffect } from "react";
import { BsCalendar3, BsCameraVideo, BsChatDots } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";
import Script from 'next/script';

// ... existing imports and data ...

export default function Services() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const handleBooking = () => {
    setShowBookingModal(true);
  };

  return (
    <main className="py-8">
      <Script 
        src="https://apis.google.com/js/api.js" 
        strategy="beforeInteractive"
      />
      <div className="container mx-auto max-w-5xl px-4">
        {/* Main Consultation Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.5fr,1fr] gap-6 mb-8">
          {/* ... existing profile and info sections ... */}

          {/* Middle Column - Info */}
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-4xl font-bold text-primary">1:1 Video Consultation</h1>
            <p className="text-lg text-white">
              Book a 1:1 video call with Scary to get personalized advice and strategies for your content creation journey.
            </p>
            <button 
              onClick={handleBooking}
              className="bg-primary text-black font-bold py-3 px-6 rounded-xl hover:bg-primary/80 transition-all"
            >
              Book a video call
            </button>
          </div>

          {/* ... rest of the existing code ... */}
        </div>

        {/* Booking Modal */}
        {showBookingModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-BGaccent rounded-3xl p-6 max-w-lg w-full mx-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-primary">Book a Video Call</h2>
                <button 
                  onClick={() => setShowBookingModal(false)}
                  className="text-white hover:text-primary"
                >
                  ✕
                </button>
              </div>
              <div className="space-y-4">
                <div className="bg-black/20 p-4 rounded-xl">
                  <h3 className="text-lg font-semibold mb-2">Available Times</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="bg-primary/10 text-primary p-2 rounded-lg hover:bg-primary/20">
                      Today 3:00 PM
                    </button>
                    <button className="bg-primary/10 text-primary p-2 rounded-lg hover:bg-primary/20">
                      Today 4:00 PM
                    </button>
                    <button className="bg-primary/10 text-primary p-2 rounded-lg hover:bg-primary/20">
                      Tomorrow 2:00 PM
                    </button>
                    <button className="bg-primary/10 text-primary p-2 rounded-lg hover:bg-primary/20">
                      Tomorrow 3:00 PM
                    </button>
                  </div>
                </div>
                <div className="flex justify-end gap-3">
                  <button 
                    onClick={() => setShowBookingModal(false)}
                    className="px-4 py-2 rounded-lg hover:bg-white/10"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={() => {
                      window.open('https://calendar.google.com/calendar/appointments/schedules/AcZssZ0NvG_7_V2HvIFUxR8zQY9hd1TuOz6R4iWNXxBY1bF4jGxqy6fHeQHhOkuCBzytMmXVBZhp7gXx', '_blank');
                      setShowBookingModal(false);
                    }}
                    className="bg-primary text-black px-4 py-2 rounded-lg font-semibold hover:bg-primary/80"
                  >
                    Continue to Google Calendar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ... rest of the existing code ... */}
      </div>
    </main>
  );
} 