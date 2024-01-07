import { GetStaticProps, Metadata, NextPage } from "next";
import { FeaturedProject, Project, TitleTxt } from "../_components";

import { gqlModels } from "../../interface";

// import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Suspense } from "react";
import serverUrl from "@/utils/getUrl";

interface PageProps {
  projects: gqlModels["projects"];
  projectCategories: gqlModels["projectCategories"];
}

export const metadata: Metadata = {
  title: "Abdurrahman Aderinto's Projects",
  description:
    "Abdurrahman Adebisi Aderinto's Projects - Explore the fusion of Web Development, Artificial Intelligence, and Internet of Things on our project page. Immerse yourself in a showcase of innovative projects, from responsive web applications to advanced AI solutions and IoT integrations. Witness the seamless synergy of creativity and technology in this concise collection that defines the forefront of digital innovation.",
};

export const fetchPageContent: () => Promise<PageProps> = async () => {
  const res = await fetch(`${serverUrl}/api/getProjects`, {
    next: { revalidate: 3600 },
  });
  const { projects, projectCategories }: PageProps = await res.json();
  return {

    projects,
    projectCategories,
  };
};

export default async function Projects() {
  const { projects, projectCategories } = await fetchPageContent();
  return (
    <div>
      <TitleTxt size="calc(1rem + 1vw)">Featured Project</TitleTxt>

      <Suspense fallback={<p>Loading. . .</p>}>
        <FeaturedProject />
      </Suspense>

      <Tabs defaultValue={projectCategories[0].name}>
        <div className="w-full flex">
          <TabsList>
            {projectCategories.map((category) => {
              return (
                <TabsTrigger value={category.name} key={category.id}>
                  {category.name}
                </TabsTrigger>
              );
            })}
          </TabsList>
        </div>
        {projectCategories.map((category) => {
          return (
            <TabsContent
              value={category.name}
              className="flex flex-wrap"
              key={category.id}
            >
              <div className="[&>*:nth-child(even)]:rotate-[4deg] [&>*:nth-child(3n)]:rotate-[-3deg] [&>*:nth-child(5n)]:rotate-[5deg] w-full flex flex-wrap">
                {projects
                  .filter((project) => {
                    return project.projectCategory.name == category.name;
                  })
                  .map((projectItem) => {
                    return (
                      <Project
                        key={projectItem.id}
                        img={projectItem.projectImages[0].url}
                        name={projectItem.name}
                        category={projectItem.projectCategory}
                        description={projectItem.description}
                        githubLink={projectItem.githublink}
                        previewLink={projectItem.previewlink}
                      />
                    );
                  })}
              </div>
            </TabsContent>
          );
        })}
        {/* <TabsContent value="password">Change your password here.</TabsContent> */}
      </Tabs>
    </div>
  );
}
