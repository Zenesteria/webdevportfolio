import Link from "next/link";
import React from "react";

interface compProps {
  title: string;
  description: string;
  views?: string;
  slug: string;
}

export default function Post({ title, description, views, slug }: compProps) {
  return (
    <Link className="my-3" href={`/blog/${slug}`}>
      <div className="flex flex-col min-h-[20vh] justify-center w-full p-5 text-left dark:hover:bg-[#a2896245] hover:bg-[#a2896245] border-b-2 dark:border-orange-300 border-orange-800">
        <div className="flex w-full justify-between items-center mb-3">
          <h1
            className="font-black max-w-[500px]"
            style={{ fontSize: "calc(1rem + 0.5vw)" }}
          >
            {title}
          </h1>
          <p>
            {views || "N/A"} <span className="font-bold">views</span>
          </p>
        </div>
        <p className="max-w-[500px] font-light text-[0.8rem]">{description}</p>
      </div>
    </Link>
  );
}
