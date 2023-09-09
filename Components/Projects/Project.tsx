import Image from "next/image";
import Link from "next/link";
import React from "react";

interface compProps {
  img: string;
  name: string;
  category: {
    id: string;
    name: string;
  };
  description: string;
  githubLink: string;
  previewLink: string;
}

export default function Project({
  img,
  name,
  category,
  description,
  githubLink,
  previewLink,
}: compProps) {
  return (
    <div className="flex flex-col w-[250px] h-fit m-3 text-black border-[0.5px] border-orange-900 dark:border-white p-3 rounded-xl hover:scale-[1.01]">
      <Image src={img} alt={name} width={300} height={300} />
      <p className="my-2 w-fit p-2 rounded-full dark:bg-orange-400 text-white bg-black dark:text-orange-900 text-[0.6rem] font-bold">
        {category.name}
      </p>

      <Link href={previewLink}>
        <h1
          className="font-bold hover:underline text-orange-900 dark:text-white"
          style={{ fontSize: "calc(1rem + 0.5vw)" }}
        >
          {name}
        </h1>
      </Link>

      <p className="text-[0.85rem] text-orange-900 dark:text-white">{description}</p>

      <div className="flex w-full justify-between">
        <Link
          className="my-4 font-semibold text-[0.8rem] hover:underline hover:tracking-wider w-fit"
          href={githubLink}
        >
          Github
        </Link>
        <Link
          className="my-4 font-semibold text-[0.8rem] hover:underline hover:tracking-wider w-fit"
          href={previewLink}
        >
          Preview
        </Link>
      </div>
    </div>
  );
}
