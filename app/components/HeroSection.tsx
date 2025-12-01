"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

interface Card {
  imgSrc: string;
  title?: string;
  description?: string;
}

interface HeroSectionProps {
  headingHighlight: string;
  cards: Card[];
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.25,
      ease: "easeOut",
    },
  }),
};

const HeroSection: React.FC<HeroSectionProps> = ({ headingHighlight, cards }) => {
  return (
    <section className="w-full bg-white pt-32 pb-20 px-6 flex flex-col items-center">
      {/* === Heading === */}
      <div className="max-w-3xl text-center flex flex-col items-center gap-4">
        <h1 className="font-gendy text-4xl sm:text-5xl leading-tight text-primary">
          Welcome to Celedom, Your <br />
          exciting <span className="text-tertiary italic">{headingHighlight}</span> Begins Here
        </h1>

        {/* CTAs */}
        <div className="flex items-center gap-4 mt-4">
          <button className="px-6 py-3 bg-secondary text-white rounded-full font-liber text-sm sm:text-base hover:bg hover:cursor-pointer transition">
            Join Waitlist
          </button>

          <button className="px-6 py-3 border border-primary hover:cursor-pointer text-primary rounded-full font-liber text-sm sm:text-base hover:bg-gray-100 transition">
            Watch demo
          </button>
        </div>
      </div>

      {/* === Cards === */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-4 gap-6 w-full max-w-6xl">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className={`shadow-md overflow-hidden bg-white h-[360px] ${
              card.title ? "rounded-xl flex flex-col" : ""
            }`}
          >
            <Image
              src={card.imgSrc}
              alt={`Card ${index + 1}`}
              width={700}
              height={500}
              className={`w-full ${card.title ? "h-[70%]" : "h-full"} object-cover`}
            />

            {card.title && card.description && (
              <div className="p-4 flex-1 flex flex-col justify-center font-liber text-sm text-secondary">
                <p className="text-primary font-gendy text-[16px]">{card.title}</p>
                <p className="text-paragraph mt-1 text-xs">{card.description}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
