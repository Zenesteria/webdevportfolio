import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";

export default function NavItem({ txt, path }: { txt: string; path: string }) {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const active = router.pathname === path;

  return (
    <Link href={path} className="mr-7 ">
      <li
        className="w-fit text-black dark:text-[#9c9c9c] hover:text-black dark:hover:text-orange-300"
        style={{
          fontSize: "calc(0.7rem + 0.5vw)",
          textDecoration: active ? "underline" : "none",
          fontWeight: active ? "500" : "400",
        }}
      >
        {txt}
      </li>
    </Link>
  );
}
