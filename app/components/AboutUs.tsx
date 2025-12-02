"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const testimonials = [
  {
    title: "Our Mission",
    text: `Get notified when celebrants are interested in your services and respond quickly to booking requests. With everything managed in-app, confirming events is simple, fast, and stress-free.`,
    icon: "/mission-icon.png",
  },
  {
    title: "Our Vision",
    text: `Celedom gives you analytics that show you how your business is doing — from the number of bookings to client engagement.`,
    icon: "/vision-icon.png",
  },
  {
    title: "Our Journey",
    text: `Set up your calendar directly in the app to manage upcoming events. Never miss a booking.`,
    icon: "/journey-icon.png",
  },
  {
    title: "Strategic Partnerships",
    text: `We partner with organizations to help vendors scale effectively.`,
    icon: "/partnership-icon.png",
  },
];

export default function AboutPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };
    updateScreen();
    window.addEventListener("resize", updateScreen);
    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  return (
    <section ref={ref} className="w-full bg-white py-24 px-5">

      {/* ===== HEADER ===== */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className="w-full flex flex-col items-center justify-center mb-20"
      >
        <h1 className="font-gendy text-4xl text-center text-primary mb-3">
          About Us
        </h1>

        {/* Avatar */}
        
      </motion.div>

      {/* ===== MAIN FLEX LAYOUT ===== */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center md:items-start">

        {/* ===== LEFT IMAGES BLOCK ===== */}
        <div className="flex flex-col gap-10 w-full md:w-[45%]">

          {/* Image 1 */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="w-full h-[260px] rounded-2xl shadow-md overflow-hidden relative"
          >
            <Image
              src="/about-us-image.png"
              alt="about us image"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Image 2 */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="w-full h-[260px] rounded-2xl shadow-md overflow-hidden relative"
          >
            <Image
              src="/about-us-image2.png"
              alt=""
              fill
              className="object-cover"
            />
          </motion.div>

        </div>

        {/* ===== RIGHT TEXT BLOCK ===== */}
        <div className="w-full md:w-[50%]">
          {testimonials.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false }}
              className="flex items-start gap-4 mb-10"
            >
              {/* Icon */}
              <div className="w-9 h-9 relative">
                <Image src={item.icon} alt="" fill className="object-contain" />
              </div>

              <div>
                <h3 className="font-gendy text-xl text-primary mb-2">
                  {item.title}
                </h3>
                <p className="font-liber text-paragraph text-[16px] leading-[1.75]">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* ===== CTA BUTTONS ===== */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className="mt-32 flex flex-col sm:flex-row items-center justify-center gap-6"
      >
        <button className="px-8 py-3 font-liber border border-gray-300 text-primary text-sm rounded-full hover:bg-gray-50 transition">
          Contact us
        </button>
        <button className="px-8 py-3 font-liber bg-secondary text-white text-sm rounded-full hover:opacity-90 transition">
          Download app
        </button>
      </motion.div>

    </section>
  );
}
