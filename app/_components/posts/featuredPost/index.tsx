import { gqlModels } from "@/interface";
import serverUrl from "@/utils/getUrl";
import TitleTxt from "../../TitleTxt";
import Post from "./Post";


export const getFeaturedPosts: () => Promise<gqlModels["posts"]> = async () => {
  const res = await fetch(`${serverUrl}/api/blog/getFeaturedPost`, {
    next: { revalidate: 3600 },
  });
  const posts: { featuredPosts: gqlModels["posts"] } = await res.json();

  return posts.featuredPosts;
};


export default async function FeaturedPosts(){
    const featuredPosts = await getFeaturedPosts()
    return (
      <>
        <TitleTxt size="calc(1.2rem + 1vw)">Featured Posts</TitleTxt>
        <div className="flex flex-wrap w-full h-fit my-5">
          {featuredPosts.map((post) => {
          return (
            <Post
              txt={post.excerpt}
              key={post.id}
              link={post.slug}
              linkText={post.title}
            />
          );
        })}
        </div>
      </>
    );
}
