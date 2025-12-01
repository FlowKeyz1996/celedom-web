"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Vendors", href: "/vendors" },
  { label: "Celebrant", href: "/celebrant" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="w-full bg-white border-b border-[#E5E5E5] fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        
        {/* === LOGO === */}
        <div className="flex items-center gap-2">
          <Image
            src="/celedom-logo.png"
            alt="Celedom Logo"
            width={150}
            height={200}
            className="object-contain"
          />
          {/* <span className="font-gendy text-xl text-primary">Celedom</span> */}
        </div>

        {/* === NAV LINKS (DESKTOP) === */}
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
                {/* Text */}
                <span
                  className={`transition-colors duration-300 group-hover:text-[#1A73E8] ${
                    isActive ? "text-[#1A73E8]" : "text-primary"
                  }`}
                >
                  {item.label}
                </span>

                {/* Blue underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 transition-all duration-300 bg-[#1A73E8] ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            );
          })}
        </nav>

        {/* === DOWNLOAD BUTTON === */}
        <div className="hidden md:flex">
          <button className="font-liber px-5 py-2.5 bg-[#1A73E8] text-white rounded-full text-[15px] hover:bg-[#1764c7] transition">
            Download App
          </button>
        </div>

        {/* === MOBILE MENU ICON === */}
        <div className="md:hidden flex items-center">
          <button>
            <Image src="/icons/menu.svg" alt="menu" width={26} height={26} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
