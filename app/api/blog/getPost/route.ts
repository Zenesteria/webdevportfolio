import { getPost } from "@/Services";
import { NextResponse } from "next/server";

interface body{
    slug:string
}

export async function POST(request:Request){
    const {slug}:body = await request.json()
    try {
        const post = getPost(slug);
        return NextResponse.json({ post });
    } catch (error) {
        console.log(error)
        return NextResponse.json({error})
    }
}