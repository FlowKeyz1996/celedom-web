"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface HowItWorksSectionProps {
  leftSubtitle?: string;
  leftHeader?: string;
  leftParagraph?: string;
  features?: Feature[];
  primaryCtaText?: string;
  secondaryCtaText?: string;
}

const defaultFeatures: Feature[] = [
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

const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({
  leftSubtitle = "HOW IT WORKS",
  leftHeader = "How Does Celedom Work?",
  leftParagraph = "Set up your business profile in just a few minutes and instantly showcase your services, skills, and specialties to thousands of celebrants searching for vendors to hire for their events.",
  features = defaultFeatures,
  primaryCtaText = "Read about us",
  secondaryCtaText = "Download app",
}) => {
  const rightRef = useRef(null);
  const isInView = useInView(rightRef, { once: false, amount: 0.3, margin: "-60px" });

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20">

        {/* LEFT SIDE */}
        <div className="flex flex-col md:mt-24">
          <p className="font-liber text-[15px] tracking-[0.15em] text-reddish mb-4">
            {leftSubtitle}
          </p>

          <h2 className="font-gendy text-[42px] leading-[1.1] text-primary mb-4">
            {leftHeader}
          </h2>

          <p className="font-liber text-paragraph text-[16px] leading-[1.75] mb-10 max-w-[430px]">
            {leftParagraph}
          </p>

          <div className="flex items-center gap-4">
            <button className="px-6 py-2.5 border border-[#C9C9C9] rounded-full font-liber text-[15px] text-primary hover:cursor-pointer hover:bg-gray-50 transition">
              {primaryCtaText}
            </button>

            <button className="px-6 py-2.5 bg-secondary text-white rounded-full font-liber text-[15px] hover:bg-[#1A63d3] transition hover:cursor-pointer">
              {secondaryCtaText}
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
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
              {/* Icon + Title */}
              <div className="flex gap-2 items-center mb-1">
                <Image src={item.icon} alt={item.title} width={34} height={34} className="shrink-0" />
                <h3 className="font-gendy text-[18px] text-primary mb-0 leading-tight">{item.title}</h3>
              </div>

              {/* Description */}
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
