'use client'
import { FaBars } from "react-icons/fa";
import NavItem from "./NavItem";
import { navData } from "../../../site-data/navigation";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathName = usePathname();
  console.log(pathName)
  const [pos, setPos] = useState(0);
  const activePathIndex = navData.indexOf(navData.filter((data) =>data.path == pathName)[0])
  const [isHover, setIsHover] = useState(false);
  // console.log(activePathIndex)
  return (
    <div className="flex items-center justify-between py-5 w-full h-[10vh]">
      <ul className="flex relative py-2">
        <div
          className="absolute indicator top-0 h-full ease-in duration-300 left-0 rounded-full bg-gradient-to-bl from-amber-400/40 via-amber-400/10 to-amber-100/10 w-[100px]"
          style={{ left: `${pos * 33}%` }}
        />
        {navData.map((nav, index) => {
          return (
              <NavItem
                index={index}
                setPos={setPos}
                txt={nav.name}
                path={nav.path}
                key={index}
                activePathIndex={activePathIndex}
              />
          );
        })}
      </ul>

      {/* <SwitchTheme /> */}
    </div>
  );
}
