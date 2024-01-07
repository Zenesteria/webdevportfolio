import Link from "next/link";
interface compProps {
  txt: string;
  link: string;
  linkText: string;
}

export default function Post({ txt, link, linkText }: compProps) {
  return (
    <div className="relative flex flex-col justify-between border-[5px] w-[250px] aspect-square mx-5 conic-gradient-border-one p-3">
      <p className="">{txt}</p>

      <Link href={`/blog/${link}`} passHref>
        <div className="group">
          <p className="text-[0.8rem] dark:text-white font-bold text-gray-400">
            {linkText} <span className="group-hover:ml-5">{">"}</span>
          </p>
        </div>
      </Link>
    </div>
  );
}
