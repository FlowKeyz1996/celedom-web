"use client";

import React from "react";
import Link from "next/link";

const getStoreLink = () => {
  if (typeof window === "undefined") return "#";

  const userAgent = navigator.userAgent.toLowerCase();

  const androidLink =
    "https://play.google.com/store/apps/details?id=YOUR_APP_ID";
  const iosLink =
    "https://apps.apple.com/app/YOUR_APP_ID";

  // --- iOS detection ---
  const isOldIOS = /iphone|ipad|ipod/.test(userAgent);
  const isNewIOS =
    /macintosh/.test(userAgent) && typeof document !== "undefined" && "ontouchend" in document;

  if (isOldIOS || isNewIOS) {
    return iosLink;
  }

  // --- Android detection ---
  if (/android/.test(userAgent)) {
    return androidLink;
  }

  // --- Windows & Linux → Play Store ---
  if (/windows|linux/.test(userAgent)) {
    return androidLink;
  }

  // --- macOS desktop/laptop → Apple Store ---
  if (/macintosh/.test(userAgent)) {
    return iosLink;
  }

  // fallback → Play Store
  return androidLink;
};

interface DownloadAppButtonProps {
  className?: string; // optional extra classes
  children?: React.ReactNode; // optional custom text
}

const DownloadAppButton: React.FC<DownloadAppButtonProps> = ({
  className = "",
  children = "Download App",
}) => {
  const storeLink = getStoreLink();

  return (
    <Link
      href={storeLink}
      target="_blank"
      className={`font-liber px-5 py-2.5 bg-secondary text-white rounded-full text-[15px] hover:bg-secondary transition ${className}`}
    >
      {children}
    </Link>
  );
};

export default DownloadAppButton;
