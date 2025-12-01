import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-white pt-32 pb-24 overflow-hidden">

      {/* Bottom wave */}
      <img
        src="/image.png"
        alt=""
        className="absolute bottom-0 left-0 w-full rotate-180 pointer-events-none select-none"
      />

      {/* Main content */}
      <div className="relative max-w-[1500px] mx-auto px-6 flex flex-col md:flex-row justify-between">

        {/* Left Column */}
        <div className="w-full md:w-[45%]">
          <h2 className="text-3xl font-gendy text-[#2563eb]">Celedom</h2>
          <p className="mt-3 text-gray-600 font-liber">
            Get started now, join our waitlist.
          </p>

          {/* MUCH LONGER INPUT */}
          <div className="mt-6 flex items-center bg-white shadow-md rounded-full px-5 py-3 w-full max-w-xl">
            <input
              type="email"
              placeholder="Enter your email here"
              className="flex-1 outline-none font-liber text-sm"
            />
            <button className="bg-[#2563eb] text-white rounded-full px-5 py-2 text-sm">
              →
            </button>
          </div>
        </div>

        {/* Right Side Columns */}
        <div className="w-full md:w-[50%] mt-10 md:mt-0 grid grid-cols-3 gap-4 pr-6">

          {/* Column 1 */}
          <div>
            <h4 className="font-gendy text-lg mb-3">Support</h4>
            <ul className="space-y-1.5 text-gray-600 font-liber">
              <li>Help centre</li>
              <li>About</li>
              <li>Contact us</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-gendy text-lg mb-3">Help & Solution</h4>
            <ul className="space-y-1.5 text-gray-600 font-liber">
              <li>Talk to support</li>
              <li>FAQs</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-gendy text-lg mb-3">Product</h4>
            <ul className="space-y-1.5 text-gray-600 font-liber">
              <li>Data & Security</li>
              <li>Vendor App on Appstore</li>
              <li>Vendor App on Playstore</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="relative max-w-[1500px] mx-auto px-6 mt-24 flex justify-between text-sm text-gray-500 font-liber">
        <p>© 2022 Celedom Inc. Copyright and rights reserved</p>
        <p>Terms and Conditions</p>
      </div>

    </footer>
  );
};

export default Footer;
