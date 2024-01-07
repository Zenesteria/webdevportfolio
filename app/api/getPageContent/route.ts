import { getPageContent } from "@/Services";
import { gqlModels } from "@/interface";
import { NextResponse } from "next/server";

interface body {
  contentName: string;
}

export async function POST(request: Request) {
  const body: body = await request.json();

  try {
    const pageContentsData: gqlModels["pageContents"] = await getPageContent();
    const pageContent = pageContentsData.filter(
      (content) => content.name == body.contentName
    )[0];

    return NextResponse.json({ pageContent });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
