"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Vendors", href: "/vendors" },
  { label: "Celebrant", href: "/celebrant" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-[#E5E5E5] fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <Image
            src="/celedom-logo.png"
            alt="Celedom Logo"
            width={150}
            height={200}
            className="object-contain"
          />
        </div>

        {/* NAV LINKS DESKTOP */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`font-liber text-[15px] relative group transition ${
                  isActive ? "text-[#1A73E8]" : "text-primary"
                }`}
              >
                <span
                  className={`transition-colors duration-300 group-hover:text-[#1A73E8] ${
                    isActive ? "text-[#1A73E8]" : "text-primary"
                  }`}
                >
                  {item.label}
                </span>

                {/* underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 transition-all duration-300 bg-[#1A73E8] ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            );
          })}
        </nav>

        {/* DOWNLOAD BTN DESKTOP */}
        <div className="hidden md:flex">
          <button className="font-liber px-5 py-2.5 bg-[#1A73E8] text-white rounded-full text-[15px] hover:bg-[#1764c7] transition">
            Download App
          </button>
        </div>

        {/* MOBILE MENU ICON */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(true)}>
            <Image src="/icons/menu.svg" alt="menu" width={26} height={26} />
          </button>
        </div>
      </div>

      {/* === MOBILE SLIDE-IN MENU === */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 w-[75%] sm:w-[300px] h-full bg-white shadow-xl z-50 p-6 flex flex-col"
            >
              {/* Close Button */}
              <div className="flex justify-end mb-8">
                <button onClick={() => setIsOpen(false)}>
                  <Image src="/icons/close.svg" alt="close" width={28} height={28} />
                </button>
              </div>

              {/* Mobile Links */}
              <nav className="flex flex-col gap-6">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`font-liber text-lg transition ${
                        isActive ? "text-[#1A73E8]" : "text-primary"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              {/* Mobile Download Button */}
              <button className="mt-10 font-liber px-5 py-3 bg-[#1A73E8] text-white rounded-full text-[16px] hover:bg-[#1764c7] transition">
                Download App
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
