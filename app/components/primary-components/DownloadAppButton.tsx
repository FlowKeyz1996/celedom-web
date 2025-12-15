"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

const getStoreLink = () => {
  if (typeof window === "undefined") return "#";

  const ua = navigator.userAgent.toLowerCase();

  const androidLink =
    "https://play.google.com/store/apps/details?id=YOUR_APP_ID";
  const iosLink = "https://apps.apple.com/app/YOUR_APP_ID";

  const isOldIOS = /iphone|ipad|ipod/.test(ua);
  const isNewIOS = /macintosh/.test(ua) && "ontouchend" in document;

  if (isOldIOS || isNewIOS) return iosLink;
  if (/android|windows|linux/.test(ua)) return androidLink;
  if (/macintosh/.test(ua)) return iosLink;

  return androidLink;
};

type Variant = "primary" | "outline" | "ghost";

interface DownloadAppButtonProps {
  /** Button style */
  variant?: Variant;

  /** Extra tailwind classes */
  className?: string;

  /** Button text (defaults to "Download App") */
  children?: React.ReactNode;
}

const variantStyles: Record<Variant, string> = {
  primary: "bg-secondary text-white hover:bg-secondary/90",
  outline:
    "border border-secondary text-secondary bg-transparent hover:bg-secondary hover:text-white",
  ghost: "bg-transparent text-secondary hover:bg-secondary/10",
};

const DownloadAppButton: React.FC<DownloadAppButtonProps> = ({
  variant = "primary",
  className,
  children = "Download App", // ✅ DEFAULT TEXT
}) => {
  const storeLink = getStoreLink();

  return (
    <Link
      href={storeLink}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center px-7 py-3 rounded-full font-liber text-sm sm:text-base transition hover:cursor-pointer",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </Link>
  );
};

export default DownloadAppButton;
