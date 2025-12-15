"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image"

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="relative bg-white pt-24 pb-16 overflow-hidden">
      {/* Bottom wave background */}
      <Image
  src="/image.png"
  alt=""
  fill
  priority
  className="object-cover rotate-180 pointer-events-none select-none"
/>


      {/* Main container */}
      <div className="relative max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row gap-16">
        {/* Left Column */}
        <div className="flex flex-col space-y-5 w-full lg:w-1/3">
          <h2 className="text-2xl font-gendy text-[#2563eb]">Celedom</h2>

          <p className="text-gray-600 font-liber max-w-sm">
            Get started now, join our waitlist.
          </p>

          {/* Email Input */}
          <form
            className="flex items-center bg-white shadow-md rounded-full px-4 py-2 w-full max-w-sm"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="Enter your email here"
              className="flex-1 bg-transparent outline-none font-liber text-sm"
            />
            <button
              type="submit"
              className="bg-[#2563eb] text-white rounded-full px-4 py-2 text-sm"
            >
              →
            </button>
          </form>
        </div>

        {/* Right Column */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 flex-1">
          {/* Support */}
          <div>
            <h4 className="font-gendy text-lg mb-3">Support</h4>
            <ul className="space-y-2 text-gray-600 font-liber">
              <li>
                <Link href="/help-centre" className="hover:underline">
                  Help centre
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Help & Solution */}
          <div>
            <h4 className="font-gendy text-lg mb-3">Help & Solution</h4>
            <ul className="space-y-2 text-gray-600 font-liber">
              <li>
                <Link href="/support" className="hover:underline">
                  Talk to support
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:underline">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-gendy text-lg mb-3">Product</h4>
            <ul className="space-y-2 text-gray-600 font-liber">
              <li>
                <Link href="/security" className="hover:underline">
                  Data & Security
                </Link>
              </li>
              <li>
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Vendor App on App Store
                </a>
              </li>
              <li>
                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Vendor App on Play Store
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="relative max-w-[1400px] mx-auto px-6 mt-20 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500 font-liber">
        <p className="text-center sm:text-left">
          © 2025 Celedom Inc. All rights reserved
        </p>

        <Link
          href="/terms-and-conditions"
          className={`hover:underline ${
            pathname === "/terms-and-conditions" ? "text-secondary" : ""
          }`}
        >
          Terms and Conditions
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
