import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { gqlModels } from "../../../interface";
import { getPost, getPosts } from "../../../Services";

import { format } from "fecha";
import parser from "html-react-parser";
import { NewsLetter } from "../../_components";
import {} from "react-icons";
import Head from "next/head";

interface PageProps {
  post: gqlModels["post"];
}

export const fetchContentData: (params: {
  slug: string;
}) => Promise<PageProps> = async (params) => {
  const slug: any = params?.slug;

  const post = await getPost(slug);
  return {
    post,
  };
};

export default async function Post({ params }: { params: { slug: string } }) {
  const { post } = await fetchContentData(params);
  const date = new Date(post.publishedAt);
  return (
    <div className="p-4 w-[90%] min-w-[300px] mx-auto dark:text-white text-black">
      <Head>
        <title>{`${post.title}`}</title>
        <meta
          name="description"
          content="Abdurrahman Adebisi Aderinto's Blog - Crafting the Future with Code and Creativity"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1
        className="font-bold min-w-[250px] max-w-[700px] mx-auto text-center"
        style={{ fontSize: "calc(1.2rem + 1vw)" }}
      >
        {post.title}
      </h1>
      <div className="w-full flex my-3 items-center justify-center text-orange-400">
        {post.categories.map((category) => (
          <p className="mx-3" key={category.id}>
            # {category.name}
          </p>
        ))}
      </div>
      <div
        className="w-full aspect-video mb-3 bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${post.thumbnail.url}')` }}
      ></div>
      <div className="w-[85%] min-w-[300px] mx-auto">
        <div className="flex my-7 w-full items-center">
          <div
            className="bg-cover bg-center bg-no-repeat w-[30px] aspect-square rounded-full mr-3"
            style={{ backgroundImage: `url('${post.author.photo.url}')` }}
          ></div>
          <p>
            {post.author.name} / {format(date, "MMMM Do, YYYY")}
          </p>
        </div>
        <div className="my-10 mx-auto font-[500] content">
          {parser(post.content.html)}
        </div>
      </div>

      <NewsLetter />
    </div>
  );
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   const posts = await getPosts();
//   return {
//     paths: posts.map((post) => {
//       return { params: { slug: post.slug } };
//     }),
//     fallback: "blocking",
//   };
// };
