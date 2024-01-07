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
    <div className="flex relative group flex-col font-[reenie] w-[350px] h-fit m-3 text-black border-orange-900 dark:border-white p-3 shadow-amber-800/50 shadow-md bg-orange-100 hover:scale-[1.01]">
      <div className="absolute w-full h-full z-[] overflow-hidden opacity-0 group-hover:opacity-100  delay-1000">
        <Image
        src={img}
        alt={name}
        width={350}
        height={350}
      />
      </div>
      <p className="my-2 w-fit p-2 rounded-full dark:bg-orange-400 text-white bg-black dark:text-orange-900 text-[0.6rem] font-bold">
        {category.name}
      </p>

      <Link href={previewLink}>
        <h1
          className="font-bold hover:underline text-center text-orange-900 dark:text-white"
          style={{ fontSize: "calc(1rem + 0.5vw)" }}
        >
          {name}
        </h1>
      </Link>

      <p className="text-[0.85rem] font-bold text-orange-900 dark:text-white">
        {description}
      </p>

      <div className="flex w-full justify-between">
        <Link
          className="my-4 font-semibold text-[0.8rem] dark:text-white hover:underline hover:tracking-wider w-fit"
          href={githubLink}
        >
          Github
        </Link>
        <Link
          className="my-4 font-semibold dark:text-white text-[0.8rem] hover:underline hover:tracking-wider w-fit"
          href={previewLink}
        >
          Preview
        </Link>
      </div>
    </div>
  );
}
