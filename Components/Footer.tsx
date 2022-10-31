import Link from "next/link";
import { navData } from "../site-data/navigation";

export default function Footer() {
  return (
    <div className="border-t-[0.5px] h-fit min-h-[20vh] p-5">
        <div className="h-fit grid grid-cols-3">
            <div className="grid grid-rows-3 h-[20vh]">
              {
                navData.map((nav,index) => {
                    return(
                        <Link className="w-fit" href={nav.path} key={index}>
                            <p className="w-fit h-fit">
                              {nav.name}
                            </p>
                        </Link>
                    )
                })
              }
            </div>
            <div className="grid grid-rows-3 h-[20vh]">
                <Link className="w-fit h-fit" href={'https://twitter.com/dev_adebisi'}>
                  <p>
                    Twitter
                  </p>
                </Link>
                <Link className="w-fit h-fit" href={'https://github.com/Zenesteria'}>
                  <p>
                    Github
                  </p>
                </Link>
                <Link className="w-fit h-fit" href={'https://www.linkedin.com/in/abdurrahman-aderinto/'}>
                  <p>
                    LinkedIn
                  </p>
                </Link>
            </div>
        </div>
    </div>
  )
}
