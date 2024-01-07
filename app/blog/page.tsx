// 'use client'
import { useState, useMemo, Suspense } from "react";
import Pfp from "../../public/img/pfp.png";
import { NextjsOriginal, PythonOriginal } from "devicons-react";
import Head from "next/head";

import { GetStaticProps, Metadata, NextPage } from "next";
import { gqlModels } from "../../interface";
import { getPageContent, getPosts } from "../../Services";
import parser from "html-react-parser";
import { Input } from "@chakra-ui/react";

import Pagination from "../../utils/pagination";
import { FeaturedPost, Post } from "../_components/posts";
import Image from "next/image";
import PostShowcase from "./_components/PostShowcase";
import serverUrl from "@/utils/getUrl";

interface PageProps {
  pageContent: gqlModels["pageContents"][0];
  posts: gqlModels["posts"];
}

export const metadata: Metadata = {
  title: "Abdurrahman Aderinto's Blog",
  description:
    "Abdurrahman Adebisi Aderinto's Blog - Crafting the Future with Code and Creativity",

};

export const fetchPageContent: () => Promise<PageProps> = async () => {
  const contentName: gqlModels["pageContents"][0]["name"] = "blogcaption";
  const pageContentsRes = await fetch(`${serverUrl}/api/getPageContent`, {
    next: { revalidate: 3600 },
    method: "POST",
    body: JSON.stringify({ contentName }),
  });

  const postsRes = await fetch(`${serverUrl}/api/blog/getPosts`,{next:{revalidate:3600}})

  const {pageContent}:{pageContent:gqlModels['pageContents'][0]} = await pageContentsRes.json()
  const {posts}:{posts:gqlModels['posts']} = await postsRes.json()
  // const posts = await getPosts();
  return {
    pageContent,
    posts,
  };
};

export default async function Blog() {
  const { pageContent, posts } = await fetchPageContent();
  const blogPageContent = pageContent;
  // console.log(blogPageContent)
  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="font-bold" style={{ fontSize: "calc(2rem + 1vw)" }}>
        Blog
      </h1>
      <div className="my-4 flex justify-center w-[70%] mx-auto min-w-[300px] items-center">
        <NextjsOriginal
          className="dark:bg-white shadow-md shadow-black/50 dark:shadow-white rounded-full"
          color=""
          size={80}
        />
        <Image
          className="mx-5"
          src={Pfp}
          width={100}
          alt="abdurrahman aderinto"
        />
        <PythonOriginal className=" drop-shadow-lg" size={80} />
      </div>
      <div className="max-w-[600px] text-[0.9rem] dark:text-white text-black italic">
        {parser(blogPageContent.content.html)}
      </div>

      {/* <>
        <div className="flex flex-col my-10 w-full text-left min-h-screen">
          <h1
            className="dark:text-white font-bold"
            style={{ fontSize: "calc(1rem + 1vw)" }}
          >
            Recent Posts
          </h1>

          <Suspense>
            <FeaturedPost />
          </Suspense>

          <Input
            w={"60%"}
            _hover={{}}
            border="2px solid rgb(154 52 18) !important"
            className="p-5 my-5 rounded-xl bg-transparent border dark:border-orange-400 dark:placeholder:text-orange-400 placeholder:text-black outline-none"
            placeholder="Search Articles. . ."
            mx={"auto"}
            my={"10"}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <h1
            className="dark:text-white font-bold"
            style={{ fontSize: "calc(1rem + 1vw)" }}
          >
            Posts
          </h1>
          {currentPostData.length > 0
            ? currentPostData.map((post) => {
                return (
                  <Post
                    key={post.id}
                    title={post.title}
                    description={post.excerpt}
                    slug={post.slug}
                  />
                );
              })
            : "NO MATCHES FOUND"}
        </div>
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={paginationPosts.length}
          pageSize={PageSize}
          onPageChange={(page: any) => setCurrentPage(page)}
        />
      </> */}
      <PostShowcase posts={posts} />
    </div>
  );
}
