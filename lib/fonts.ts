import localFont from "next/font/local";
import { Libre_Franklin } from "next/font/google";

// === GENDY LOCAL FONT ===
export const gendy = localFont({
  src: [
    { path: "./fonts/gendy/Gendy.woff2", weight: "400", style: "normal" },
    { path: "./fonts/gendy/Gendy.woff", weight: "400", style: "normal" },
    { path: "./fonts/gendy/Gendy.ttf", weight: "400", style: "normal" },
    { path: "./fonts/gendy/Gendy.otf", weight: "400", style: "normal" },
  ],
  variable: "--font-gendy",
  display: "swap",
});

// === LIBER GROTESQUE (Google Font) ===
export const liberGrotesque = Libre_Franklin({
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
  variable: "--font-liber",
});

// === LIBER GROTESQUE (Local Font) ===
export const liberGrotesqueLocal = localFont({
  src: [
    { path: "./fonts/liber/LiberGrotesqueFamily-Regular.ttf", weight: "400", style: "normal" },
    {path: "./fonts/liber/LiberGrotesqueFamily-Regular.woff", weight:"400", style:"normal"},
    {path: "./fonts/liber/LiberGrotesqueFamily-Regular.woff2", weight:"400", style:"normal"}
  ],
  variable: "--font-liber-local",
  display: "swap",
});
