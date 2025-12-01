"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const BenefitsSection = () => {
  return (
    <section className="w-full bg-white px-6 flex flex-col md:flex-row items-center md:items-start gap-14 max-w-7xl mx-auto min-h-screen">

      {/* ===== LEFT DIV (Offset & centered in viewport) ===== */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true }}
        className="flex-1 text-center md:text-left max-w-lg mt-auto mb-auto"
      >

        {/* Label */}
        <p className="font-liber text-[13px] tracking-[0.15em] text-tertiary mb-3 uppercase">
          BENEFITS
        </p>

        {/* Heading */}
        <h2 className="font-gendy text-4xl leading-[1.12] text-black mb-4">
          Set Up Your Calendar
        </h2>

        {/* Icon row replacing the red dot */}
        <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
          <span className="w-8 h-8 bg-[#F24E1E]/10 rounded-full flex items-center justify-center shrink-0">
            <Image
              src="/icons/calendar-red.svg" // ⬅️ Replace with your actual small icon path
              alt="calendar list toggle icon"
              width={14}
              height={14}
              className="w-3.5 h-3.5"
            />
          </span>

          <p className="font-liber text-[15px]  text-[#F24E1E]">
            Switch between List and Calendar view
          </p>
        </div>

        {/* Description */}
        <p className="font-liber text-[#6B6B6B] text-[16.5px] leading-[1.75] mb-6">
          Stay organized with options: quickly scan upcoming events in list
          view or manage your schedule visually in calendar view. Choose
          the view that works best for you, see all your bookings in a simple
          list, or track them by date in your calendar.
        </p>

        {/* CTA Button */}
        <button className="px-7 py-3 bg-[#0057FF] text-white rounded-full font-liber text-[15px] w-fit hover:opacity-90 transition mx-auto md:mx-0">
          Become a vendor
        </button>

      </motion.div>

      {/* ===== RIGHT DIV (Only large image now) ===== */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true }}
        className="flex-1 flex justify-center"
      >
        <Image
          src="/Benefits-img.png" // ⬅️ Now fully obvious and large
          alt="calendar phone ui mockup"
          width={800}
          height={900}
          className="w-[80%] md:w-[450px] lg:w-[450px] xl:w-[500px] drop-shadow-2xl"
          priority
        />
      </motion.div>

    </section>
  );
};

export default BenefitsSection;
