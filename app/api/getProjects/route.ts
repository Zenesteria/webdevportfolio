import { getProjectCategories, getProjects } from "@/Services";
import { NextResponse } from "next/server";

export async function GET(){
    try {
      const projects = await getProjects();
      const projectCategories = await getProjectCategories();
      console.log({projectCategories})
      return NextResponse.json({ projects, projectCategories });
    } catch (error) {
        console.log(error)
    }
}