"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

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

const HeroSection = () => {
  return (
    <section className="w-full bg-white pt-32 pb-20 px-6 flex flex-col items-center">
      {/* === Heading === */}
      <div className="max-w-3xl text-center flex flex-col items-center gap-4">
        <h1 className="font-gendy text-4xl sm:text-5xl leading-tight text-primary">
          Welcome to Celedom, Your <br />
          exciting <span className="text-tertiary italic">Success</span> Begins Here
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

      {/* === Cards (Medium Size) === */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-4 gap-6 w-full max-w-6xl">
        
        {/* Card 1 */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          className="shadow-md overflow-hidden bg-white h-[360px]"
        >
          <Image
            src="/hero-img-one.png"
            alt="Card 1"
            width={700}
            height={500}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Card 2 */}
        <motion.div
          custom={1}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          className="rounded-xl shadow-md bg-white h-[360px] flex flex-col overflow-hidden"
        >
          <Image
            src="/hero-img-two.png"
            alt="Card 2"
            width={700}
            height={500}
            className="w-full h-[70%] object-cover"
          />

          <div className="p-4 flex-1 flex flex-col justify-center font-liber text-sm text-secondary">
            <p className="text-primary font-semibold">Accept Booking Seamlessly</p>
            <p className="text-paragraph mt-1 text-xs">
              Receive and respond to request in-app. Making it easy to secure clients and confirm events without hassle
            </p>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          className=" shadow-md overflow-hidden bg-white h-[360px]"
        >
          <Image
            src="/hero-img-three.png"
            alt="Card 3"
            width={700}
            height={500}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Card 4 */}
        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          className="rounded shadow-md bg-white h-[360px] flex flex-col overflow-hidden"
        >
          <Image
            src="/hero-img-four.png"
            alt="Card 4"
            width={700}
            height={500}
            className="w-full h-[70%] object-cover"
          />

         <div className="p-4 flex-1 flex flex-col justify-center font-liber text-sm text-secondary">
            <p className="text-primary font-semibold">Track Your Success In Real Time</p>
            <p className="text-paragraph mt-1 text-xs">
              Access powerful analytics to see how your business is performing and make smarter decisions to grow.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
