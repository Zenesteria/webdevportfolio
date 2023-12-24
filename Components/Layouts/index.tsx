import React from "react";
import Bg from "../animated-bg/Bg";
import { Nav, Footer } from "../index";

const Layout = ({ children }: { children: React.ReactElement }) => {
  return (
    <div className="flex relative w-full min-h-screen bg-orange-50 dark:bg-[#2b0e00] dark:text-white text-black font-['cinzel_reg']">
      <Bg />
      <div className="w-[80%] min-w-[330px] mx-auto z-[20]">
        <Nav />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
