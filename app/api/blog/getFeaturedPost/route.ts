import { getPosts } from "@/Services";
import { NextResponse } from "next/server";


export async function GET(){
    const posts = await getPosts()
    const featuredPosts = posts.filter((post) =>post.featured).slice(0,3)

    return NextResponse.json({featuredPosts})
}