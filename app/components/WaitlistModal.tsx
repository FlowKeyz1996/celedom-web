"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Props { open: boolean; onClose: () => void; onSubmit?: (data: unknown) => void; }

export default function WaitlistModal({ open, onClose, onSubmit }: Props) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") onClose(); }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    onClick={onClose}
        >
          <motion.div onClick={(e) => e.stopPropagation()}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-3xl"
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-black text-2xl">&times;</button>

            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10"><Image src="/celedom-blue-logo.svg" width={40} height={40} alt="Celedom" /></div>
              <div>
                <h2 className="text-2xl font-semibold text-black">Join the Celedom Vendor waitlist</h2>
                <p className="text-sm text-gray-500">Fill in the details below to join the vendor waitlist</p>
              </div>
            </div>

            <form onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget as HTMLFormElement);
              const payload = Object.fromEntries(fd.entries());
              if (onSubmit) onSubmit(payload);
              // optionally close or show success
            }} className="space-y-5">
              <div><label className="block text-sm font-medium mb-1">Full Name*</label>
                <input name="fullName" required className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm" placeholder="Enter your full name" />
              </div>

              <div><label className="block text-sm font-medium mb-1">Email Address*</label>
                <input name="email" type="email" required className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm" placeholder="e.g. celedomapp@gmail.com" />
              </div>

              <div><label className="block text-sm font-medium mb-1">Phone number</label>
                <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-3 py-2">
                  <Image src="/nigeria-flag.svg" width={20} height={20} alt="NG" />
                  <span className="text-sm font-medium">+234</span>
                  <input name="phone" className="flex-1 outline-none text-sm" placeholder="Enter your phone number e.g 81 9000 0000" />
                </div>
              </div>

              <div><label className="block text-sm font-medium mb-1">Location</label>
                <input name="location" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm" placeholder="Enter your current location e.g Lagos, Nigeria" />
              </div>

              <div className="mt-6 space-y-3">
                <button type="submit" className="w-full bg-[#6f6b74] text-white py-3 rounded-lg font-medium">Confirm</button>
                <button type="button" onClick={onClose} className="w-full py-3 rounded-lg font-medium border border-gray-200">Cancel</button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
