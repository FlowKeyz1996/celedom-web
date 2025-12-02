"use client"
import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 15,
      mass: 0.8,
      duration: 1.2,
    },
  },
};

interface BenefitsManageProps {
  imageSrc: string;
  tag?: string;
  title?: string;
  iconSrc?: string;
  iconAlt?: string;
  highlightText?: string;
  description?: string;
  buttonText?: string;
  buttonColor?: string;
  textColor?: string;
  shadowSize?: string;
  imageWidth?: number;
  imageHeight?: number;
}

const BenefitsManageSection: React.FC<BenefitsManageProps> = ({
  imageSrc,
  tag = "BENEFITS",
  title = "Manage Activities In One Place",
  iconSrc = "/icons/calendar-red.svg",
  iconAlt = "calendar list toggle icon",
  highlightText = "Switch between List and Calendar view",
  description = `Stay organized with options: quickly scan upcoming events in list
  view or manage your schedule visually in calendar view. Choose
  the view that works best for you, see all your bookings in a simple
  list, or track them by date in your calendar.`,
  buttonText = "Download App",
  buttonColor = "#0057FF",
  textColor = "text-primary",
  shadowSize = "drop-shadow-2xl",
  imageWidth = 800,
  imageHeight = 900,
}) => {
  return (
    <section className="w-full bg-white px-6 py-10 flex flex-col md:flex-row items-center md:items-start gap-14 max-w-7xl mx-auto">

      {/* ===== LEFT DIV (Image) ===== */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: false, amount: 0.3 }}
        className="flex-1 flex justify-center"
      >
        <Image
          src={imageSrc}
          alt={iconAlt}
          width={imageWidth}
          height={imageHeight}
          className={`w-[80%] md:w-[450px] lg:w-[450px] xl:w-[500px] ${shadowSize}`}
          priority
        />
      </motion.div>

      {/* ===== RIGHT DIV (Text) ===== */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: false }}
        className="flex-1 text-center md:text-left max-w-xl mt-auto mb-auto"
      >
        <p
          className="font-liber text-[13px] tracking-[0.15em] text-reddish mb-3 uppercase"
          style={{ color: textColor }}
        >
          {tag}
        </p>

        <h2 className="font-gendy text-4xl leading-[1.12] text-black mb-4">
          {title}
        </h2>

        <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
          <span
            className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
            style={{ backgroundColor: `${textColor}10` }}
          >
            <Image
              src={iconSrc}
              alt={iconAlt}
              width={14}
              height={14}
              className="w-3.5 h-3.5"
            />
          </span>

          <p
            className="font-liber text-[17px]"
            style={{ color: textColor }}
          >
            {highlightText}
          </p>
        </div>

        <p
          className="font-liber text-[16.5px] leading-[1.75] mb-6"
          style={{ color: "#6B6B6B" }}
        >
          {description}
        </p>

        <button
          className="px-7 py-3 text-white rounded-full font-liber text-[15px] w-fit hover:opacity-90 transition mx-auto md:mx-0"
          style={{ backgroundColor: buttonColor }}
        >
          {buttonText}
        </button>
      </motion.div>
    </section>
  );
};

export default BenefitsManageSection;
