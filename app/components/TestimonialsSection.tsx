"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Victoria Kane",
    role: "Caterer",
    text: "Worked 50 events last year using this app. It was so impressive.",
    img: "/testimonial-img.png",
    avatar: "/testimonial-img2.png",
  },
  {
    name: "Joan Chung",
    role: "Make-up Artist",
    text: "I'm a make-up artist: client business was slow — now it's faster and easy to coordinate.",
    img: "/testimonial-img2.png",
    avatar: "/testimonial-img1.png",
  },
  {
    name: "Demilade Akoh",
    role: "Host/Planner",
    text: "Got a couple of bookings on the app, making drinks and setting orders. It's not bad at all.",
    img: "/testimonial-img1.png",
    avatar: "/testimonial-img2.png",
  },
  {
    name: "Samuel O.",
    role: "Photographer",
    text: "Scheduling and client communication improved significantly.",
    img: "/testimonial-img.png",
    avatar: "/testimonial-img.png",
  },
];

const TestimonialsSection: React.FC = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () =>
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));

  // ✅ Show only 1 card if screen is mobile, otherwise 3
  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;

  const visible = isMobile
    ? [testimonials[index]]
    : [
        testimonials[index],
        testimonials[(index + 1) % testimonials.length],
        testimonials[(index + 2) % testimonials.length],
      ];

  return (
    <section className="w-full py-24 flex flex-col items-center">
      <p className="text-[#ca6d70] font-liber tracking-widest text-xs mb-2">
        TESTIMONIALS
      </p>

      <h2 className="font-gendy text-3xl md:text-4xl text-center mb-14">
        What Our Users Say About Us
      </h2>

      <div className="relative w-full max-w-6xl flex items-center justify-center">
        {/* Left Arrow */}
        <button
          onClick={prev}
          className="absolute -left-6 md:-left-10 bg-white rounded-full shadow-md p-3 hover:bg-gray-50 transition"
        >
          ←
        </button>

        <div className="flex gap-10 overflow-hidden px-4">
          <AnimatePresence mode="popLayout">
            {visible.map((item) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.35 }}
                className="w-80 h-96 relative rounded-2xl overflow-hidden shadow-lg"
              >
                {/* Background Image */}
                <Image
                  src={item.img}
                  alt=""
                  fill
                  className="object-cover"
                />

                {/* Content Card */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%] bg-white rounded-xl shadow-md p-5 text-center">
                  {/* Avatar */}
                  <div className="w-16 h-16 mx-auto -mt-10 rounded-full overflow-hidden border-4 border-white shadow-md">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>

                  <h4 className="font-gendy text-lg mt-2">{item.name}</h4>
                  <p className="font-liber text-gray-500 text-sm">
                    {item.role}
                  </p>

                  <p className="mt-2 font-liber text-gray-700 text-sm leading-relaxed">
                    {item.text}
                  </p>

                  <div className="mt-2 flex justify-center text-orange-500 text-base">
                    ★★★★★
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute -right-6 md:-right-10 bg-white rounded-full shadow-md p-3 hover:bg-gray-50 transition"
        >
          →
        </button>
      </div>
    </section>
  );
};

export default TestimonialsSection;
