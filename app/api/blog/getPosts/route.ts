import { getPosts, getProjects } from "@/Services";
import { NextResponse } from "next/server";

export async function GET(){
    const posts = await getPosts();
    return NextResponse.json({posts})
}