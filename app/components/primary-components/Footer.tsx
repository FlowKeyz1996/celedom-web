import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-white py-28 pb-20 overflow-hidden">

      {/* Bottom wave background */}
      <img
        src="/image.png"
        alt=""
        className="absolute bottom-0 left-0 w-full rotate-180 pointer-events-none select-none"
      />

      {/* Main grid */}
      <div className="relative max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6 pr-10">

        {/* Left Column - Logo & Email */}
        <div>
          <h2 className="text-2xl font-gendy text-[#2563eb]">Celedom</h2>
          <p className="mt-2 text-gray-600 font-liber">
            Get started now, join our waitlist.
          </p>

          {/* Email Input */}
          <div className="mt-5 flex items-center bg-white shadow-md rounded-full px-4 py-2 w-full max-w-sm">
            <input
              type="email"
              placeholder="Enter your email here"
              className="flex-1 outline-none font-liber text-sm"
            />
            <button className="bg-[#2563eb] text-white rounded-full px-4 py-2 text-sm">
              →
            </button>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-gendy text-lg mb-3">Support</h4>
          <ul className="space-y-2 text-gray-600 font-liber">
            <li>Help centre</li>
            <li>About</li>
            <li>Contact us</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="font-gendy text-lg mb-3">Help and Solution</h4>
          <ul className="space-y-2 text-gray-600 font-liber">
            <li>Talk to support</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="font-gendy text-lg mb-3">Product</h4>
          <ul className="space-y-2 text-gray-600 font-liber">
            <li>Data & Security</li>
            <li>Download Vendor App on Appstore</li>
            <li>Download Vendor App on Playstore</li>
          </ul>
        </div>

      </div>

      {/* Bottom row */}
      <div className="relative max-w-[1400px] mx-auto px-6 mt-20 flex justify-between text-sm text-gray-500 font-liber pr-10">
        <p>© 2022 Celedom Inc. Copyright and rights reserved</p>
        <p>Terms and Conditions</p>
      </div>

    </footer>
  );
};

export default Footer;
