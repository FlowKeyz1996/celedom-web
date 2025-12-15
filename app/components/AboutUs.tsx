"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import Link from "next/link";
import DownloadAppButton from "./primary-components/DownloadAppButton";

/* =======================
   ANIMATION
======================= */
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

/* =======================
   CONTENT
======================= */
const aboutSections = [
  {
    title: "About Us",
    text:
      "CELEDOM, a subsidiary of CelebrationDOM, is a U.S.-based platform (Western New York, Buffalo) dedicated to making birthdays, weddings, festivals, and any special moment effortless and fun.",
    icon: "/about-us-icon.png",
  },
  {
    title: "Our Mission",
    text:
      "We connect celebrants with top-tier service providers, offering seamless socializing, buying, selling, and advertising. We keep the rules clear, privacy protected, and the party always on point.",
    icon: "/our-mission-icon-about-us.png",
  },
  {
    title: "Our Vision",
    text:
      "We’ll help you transform every celebration into a meme-worthy, unforgettable experience, where love, laughter, and vibrant energy meet reliable, drama-free technology.",
    icon: "/our-vision-icon-about-us.png",
  },
  {
    title: "What We Do",
    text:
      "Match users with vetted Service Providers, enable event request fulfillment, commerce, and collaboration.",
    icon: "/what-we-do--icon-about-us.png",
  },
  {
    title: "Our Promise",
    text:
      "Deliver a smooth, automatically updated experience while fostering a community that’s lively, yet drama‑free (unless the party calls for it ).",
    icon: "/our-promise-icon-about-us.png",
  },
  {
    title: "Bottom Line",
    text:
      "If your celebration deserves a platform as bold as your playlist and as dependable as a best friend’s RSVP, CELEDOM has you covered. 🎉",
    icon: "/bottom-line-icon.png",
  },
];

export default function AboutPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section ref={ref} className="w-full bg-white py-24 px-5">
      {/* =======================
          HEADER
      ======================= */}
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
        
      </motion.div>

      {/* =======================
          MAIN CONTENT
      ======================= */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-20 items-start">

        {/* ===== LEFT IMAGES ===== */}
        <div className="flex flex-col gap-12 w-full md:w-[45%]">
          {/* Top Image */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="w-full h-[360px] rounded-3xl shadow-lg overflow-hidden relative"
          >
            <Image
              src="/about-us-image.png"
              alt="About Celedom"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Bottom Image (Bigger) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="w-full h-[480px] rounded-3xl shadow-lg overflow-hidden relative"
          >
            <Image
              src="/about-us-image2.png"
              alt="Celedom experience"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* ===== RIGHT TEXT BLOCK ===== */}
        <div className="w-full md:w-[50%] space-y-4">
          {aboutSections.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false }}
              className="max-w-xl"
            >
              {/* Icon + Title aligned like HowItWorks ✅ */}
              <div className="flex items-center gap-2 mb-1">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={24}
                  height={24}
                  className="shrink-0"
                />
                <h3 className="font-gendy text-xl text-primary leading-tight">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="font-liber text-paragraph text-[16px] leading-[1.85]">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* =======================
          CTA
      ======================= */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className="mt-32 flex flex-col sm:flex-row items-center justify-center gap-6"
      >
      
        <Link href="/contact-us"
           className="px-8 py-3 font-liber border border-gray-300 text-primary text-sm rounded-full hover:bg-gray-50 transition">
          
        Contact us
        </Link>
       <DownloadAppButton/>
      </motion.div>
    </section>
  );
}
