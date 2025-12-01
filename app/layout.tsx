import type { Metadata } from "next";
import "./globals.css";

import { gendy, liberGrotesque } from "@/lib/fonts";
import Navbar from "./components/primary-components/Navbar";
import Footer from "./components/primary-components/Footer";

export const metadata: Metadata = {
  title: "Celedom ",
  description: "Celedom, Your number one celebration Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${gendy.variable} ${liberGrotesque.variable}`}>
      <body className="antialiased">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
