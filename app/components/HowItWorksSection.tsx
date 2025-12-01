"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const features = [
  {
    icon: "/acceptance-logo.png",
    title: "Accept Requests With Ease",
    description:
      "Get notified when celebrants are interested in your services and respond quickly to booking requests. With everything managed in-app, confirming events is simple, fast, and stress-free.",
  },
  {
    icon: "/track-business-logo.png",
    title: "Track Your Business Performance",
    description:
      "Access built-in analytics that show you how your business is doing, from bookings to client engagement. Use insights to grow smarter and make better decisions for your services.",
  },
  {
    icon: "/stay-organized-logo.png",
    title: "Stay Organized With Your Calendar",
    description:
      "Set up your calendar directly in the app to manage all your upcoming events. Never miss a booking, double-check your schedule, and keep your business running smoothly.",
  },
];

const HowItWorksSection = () => {
  const rightRef = useRef(null);

  const isInView = useInView(rightRef, {
    once: false,
    amount: 0.3,
    margin: "-60px",
  });

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20">

        {/* LEFT SIDE */}
        <div className="flex flex-col md:mt-24">
          <p className="font-liber text-[13px] tracking-[0.15em] text-tertiary mb-4">
            HOW IT WORKS
          </p>

          <h2 className="font-gendy text-[42px] leading-[1.1] text-primary mb-6">
            How Does Celedom Work?
          </h2>

          <p className="font-liber text-paragraph text-[16px] leading-[1.75] mb-10 max-w-[430px]">
            Set up your business profile in just a few minutes and instantly
            showcase your services, skills, and specialties to thousands of
            celebrants searching for vendors to hire for their events.
          </p>

          <div className="flex items-center gap-4">
            <button className="px-6 py-2.5 border border-[#C9C9C9] rounded-full font-liber text-[15px] text-primary hover:bg-gray-50 transition">
              Read about us
            </button>

            <button className="px-6 py-2.5 bg-secondary text-white rounded-full font-liber text-[15px] hover:bg-[#1A63d3] transition hover:cursor-pointer">
              Download app
            </button>
          </div>
        </div>

        {/* ✅ RIGHT SIDE — ONLY ALIGNMENT MODIFIED */}
        <div ref={rightRef} className="flex flex-col gap-12">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, filter: "blur(0px)" }
                  : { opacity: 0, y: 40, filter: "blur(12px)" }
              }
              transition={{
                duration: 1.2,
                delay: index * 0.35,
                ease: "easeOut",
              }}
            >
              {/* ✅ Icon + Title on same line */}
              <div className="flex gap-2 items-center mb-1">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={34}
                  height={34}
                  className="shrink-0"
                />

                <h3 className="font-gendy text-[18px] text-primary mb-0 leading-tight">
                  {item.title}
                </h3>
              </div>

              {/* ✅ Paragraph unchanged from your original */}
              <p className="font-liber text-paragraph text-[16px] leading-[1.75] mb-0 max-w-[430px]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;
