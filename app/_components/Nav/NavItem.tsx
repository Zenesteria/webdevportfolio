import Link from "next/link";
import { useTheme } from "next-themes";
import { SetStateAction, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface navItemProps {
  txt: string;
  path: string;
  setPos:React.Dispatch<SetStateAction<number>>
  index:number
  activePathIndex:number
}

export default function NavItem({ txt, path,setPos,index,activePathIndex}:navItemProps) {
  const { theme, setTheme } = useTheme();
  const pathName = usePathname();
  const active = pathName === path;

  useEffect(() => {
    if(active){
      setPos(index)
      console.log('kkakakj')
    }
  },[pathName,active,index,setPos])
  return (
    <Link
      href={path}
      className="mr-7"
      onMouseOver={()=>setPos(index)}
      onMouseLeave={()=>setPos(activePathIndex)}
    >
      <li
        className="w-[100px] text-center relative z-[20] text-black dark:text-[#9c9c9c] hover:text-black dark:hover:text-orange-300"
        style={{
          fontSize: "calc(0.7rem + 0.5vw)",
          fontWeight: active ? "500" : "400",
        }}
      >
        {txt}
      </li>
    </Link>
  );
}
