"use client";

import React, { useState } from "react";
import Image from "next/image";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://your-backend-url.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed");

      alert("Message sent successfully!");
      setData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      alert("An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-[#F4F6FF] flex justify-center py-24 px-4">
      <div className="w-full max-w-5xl">

        {/* WHITE CARD */}
        <div className="bg-white shadow-sm rounded-xl border border-gray-200 p-8 md:p-12">

          {/* CENTERED HEADER - INSIDE CARD */}
          <div className="text-center mb-10">
            <h2 className="text-4xl font-medium text-gray-900">Get in touch</h2>
            <p className="mt-2 text-gray-600">
              Reach out, let’s see how celedom can make your dreams a possibility!
            </p>
          </div>

          {/* FORM + IMAGE SECTION */}
          <div className="flex flex-col md:flex-row gap-8 items-start">

            {/* FORM */}
            <form onSubmit={handleSubmit} className="w-full md:w-1/2 space-y-5">
              <div>
                <p className="text-lg font-semibold text-gray-800">Let’s get you sorted</p>
                <p className="text-sm text-gray-500">
                  We are only a few deets away. Tell us a little about yourself, Let us handle the rest.
                </p>
              </div>

              {/* First + Last Name */}
              <div className="flex gap-4">
                <input
                  name="firstName"
                  placeholder="Emmanuel"
                  value={data.firstName}
                  onChange={handleChange}
                  className="w-1/2 border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  name="lastName"
                  placeholder="Sanni"
                  value={data.lastName}
                  onChange={handleChange}
                  className="w-1/2 border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Email */}
              <input
                name="email"
                type="email"
                placeholder="emmanuelsanni@gmail.com"
                value={data.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
              />

              {/* Phone */}
              <div className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-2">
                <span className="text-sm">🇳🇬 +234</span>
                <input
                  name="phone"
                  placeholder="09069090888"
                  value={data.phone}
                  onChange={handleChange}
                  className="flex-1 outline-none text-sm"
                />
              </div>

              {/* Message */}
              <textarea
                name="message"
                placeholder="Write your message..."
                value={data.message}
                onChange={handleChange}
                rows={4}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
              />

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#1A73E8] text-white py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>

            {/* RIGHT IMAGE */}
            <div className="w-full md:w-1/2 rounded-lg overflow-hidden border border-gray-200">
              <Image
                src="/contact-us-img.png"
                alt="contact"
                width={700}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
