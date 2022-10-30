import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";


export default function NavItem({txt, path}:{txt:string, path:string}) {
  const {theme, setTheme} = useTheme();
  const router = useRouter();
  const active = router.pathname == path
  console.log(router.pathname)
  return (
    <Link href={path} className='mr-7'>
        <li className="w-fit text-black dark:text-[#9c9c9c]" style={{fontSize:'calc(0.7rem + 0.5vw)', color:theme == 'dark' ? active ? 'rgba(255,255,255)' : '#9c9c9c' : active ? 'black' : 'gray' }}>
            {txt}
        </li>
    </Link>
  )
}
