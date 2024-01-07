"use client";
import React from "react";
import "./globals.css";
import Bg from "./_components/animated-bg/Bg";
import { Footer, Nav } from "./_components";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
        <div className="flex relative w-full min-h-screen bg-orange-50 dark:bg-[#2b0e00] delay-200 duration-1000 dark:text-white text-black font-[eurostyle]">
          <Bg />
          <div className="w-[80%] min-w-[330px] mx-auto z-[20]">
            <Nav />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
