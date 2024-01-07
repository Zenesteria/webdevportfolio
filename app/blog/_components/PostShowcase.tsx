'use client'
import { FeaturedPost, Post } from '@/app/_components/posts';
import { Input } from '@/components/ui/input';
import { gqlModels } from '@/interface';
import Pagination from '@/utils/pagination';
import React, { Suspense, useMemo, useState } from 'react'

let PageSize = 4;

export default function PostShowcase({posts}:{posts:gqlModels['posts']}) {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState("");

    const paginationPosts =
      searchValue.length < 1
        ? posts
        : posts.filter((post) =>
            post.title.toLowerCase().includes(searchValue.toLowerCase())
          );

    const currentPostData = useMemo(() => {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      // return posts.slice(firstPageIndex, lastPageIndex);
      return paginationPosts.slice(firstPageIndex, lastPageIndex);
    }, [paginationPosts, currentPage]);


  return (
    <>
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
          className="p-5 my-10 mx-auto rounded-xl bg-transparent border dark:border-orange-400 dark:placeholder:text-orange-400 placeholder:text-black outline-none"
          placeholder="Search Articles. . ."
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
    </>
  );
}
