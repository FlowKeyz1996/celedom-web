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

interface BenefitsSectionProps {
  label?: string;
  header?: string;
  iconPath?: string;
  iconText?: string;
  description?: string;
  buttonText?: string;
  imageSrc?: string;
  imageAlt?: string;
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({
  label = "BENEFITS",
  header = "Set Up Your Calendar",
  iconPath = "/icons/calendar-red.svg",
  iconText = "Switch between List and Calendar view",
  description = "Stay organized with options: quickly scan upcoming events in list view or manage your schedule visually in calendar view. Choose the view that works best for you, see all your bookings in a simple list, or track them by date in your calendar.",
  buttonText = "Become a vendor",
  imageSrc = "/Benefits-img.png",
  imageAlt = "calendar phone ui mockup",
}) => {
  return (
    <section className="w-full bg-white px-6 flex flex-col md:flex-row items-center md:items-start gap-14 max-w-7xl mx-auto min-h-screen">

      {/* ===== LEFT DIV */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true }}
        className="flex-1 text-center md:text-left max-w-lg mt-auto mb-auto"
      >
        {/* Label */}
        <p className="font-liber text-[13px] tracking-[0.15em] text-reddish mb-3 uppercase">
          {label}
        </p>

        {/* Heading */}
        <h2 className="font-gendy text-4xl leading-[1.12] text-black mb-2">
          {header}
        </h2>

        {/* Icon row */}
        <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
          <span className="w-8 h-8 bg-tertiary rounded-full flex items-center justify-center shrink-0">
            <Image
              src={iconPath}
              alt="icon"
              width={14}
              height={14}
              className="w-3.5 h-3.5"
            />
          </span>

          <p className="font-liber text-md text-primary font-medium">{iconText}</p>
        </div>

        {/* Description */}
        <p className="font-liber text-paragraph text-[16.5px] leading-[1.75] mb-6">
          {description}
        </p>

        {/* CTA Button */}
        <button className="px-7 py-3 bg-secondary text-white rounded-full font-liber text-[15px] w-fit hover:opacity-90 transition mx-auto md:mx-0">
          {buttonText}
        </button>
      </motion.div>

      {/* ===== RIGHT DIV (Animated Image) ===== */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 flex justify-center"
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
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
