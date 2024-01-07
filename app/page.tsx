import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { FeaturedProject, Hero, NewsLetter, TitleTxt } from "./_components";
import { FeaturedPost } from "./_components/posts";
import { gqlModels } from "../interface";
import { getPageContent, getPosts, getProjects } from "../Services";
import { Suspense } from "react";

interface PageProps {
  pageContents: gqlModels["pageContents"];
  posts: gqlModels["posts"];
  projects: gqlModels["projects"];
}

interface pageData {
  pageContents: gqlModels["pageContents"];
  posts: gqlModels["posts"];
  projects: gqlModels["projects"];
}

export const fetchSiteContent: () => Promise<PageProps> = async () => {
  const pageContents = await getPageContent();
  const posts = await getPosts();
  const projects = await getProjects();

  return {
    pageContents,
    posts,
    projects,
  };
};

export default async function Home() {
  //   const {pageContents,posts,projects} = await fetchSiteContent()
  // const heroData = pageContents.filter((content) => {
  //   return content.name == "mainpageheading";
  // })[0];
  // const featuredPostsData = posts
  //   .filter((post) => {
  //     return post.featured;
  //   })
  //   .slice(0, 2);
  // const featuredProjectData = projects.filter((project) => {
  //   return project.featured;
  // })[0];
  return (
    <div>
      <Head>
        <title>Abdurrahman Aderinto - Fullstack Developer</title>
        <meta
          name="description"
          content="Abdurrahman Adebisi Aderinto's Portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="" data-aos="fade-right" data-aos-delay="300">
        <Hero contentName="mainpageheading" />
      </div>
      <Suspense fallback={<p>Loading. . .</p>}>
        <FeaturedProject />
      </Suspense>

      <FeaturedPost />

      <NewsLetter />
    </div>
  );
}
