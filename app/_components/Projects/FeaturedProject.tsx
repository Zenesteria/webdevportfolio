import Link from "next/link";
import { useTheme } from "next-themes";
import { gqlModels } from "@/interface";
import serverUrl from "@/utils/getUrl";

// interface compProps {
//   img: string;
//   title: string;
//   date: string;
//   category: {
//     id: string;
//     name: string;
//   };
//   description: string;
//   githubLink: string;
//   previewLink: string;
//   featured: boolean;
// }

export const getProjectsData: () => Promise<
  gqlModels["projects"]
> = async () => {
  const res = await fetch(`${serverUrl}/api/getProjects`, {
    next: { revalidate: 3600 },
  });

  const projectData: { projects: gqlModels["projects"] } = await res.json();
  return projectData.projects;
};

export default async function FeaturedProject(
  {
    // img,
    // title,
    // date,
    // category,
    // description,
    // githubLink,
    // previewLink,
    // featured,
  }
) {
  const projectsData = await getProjectsData();
  const {
    projectImages,
    name,
    startdate,
    projectCategory,
    previewlink,
    githublink,
    description,
    projectstatus,
  } = projectsData.filter((project) => project.featured)[0];
  return (
    <div className="w-full flex flex-col my-20">
      <h1
        className="mx-auto w-full h-fit bg-contain bg-center bg-no-repeat my-14 flex flex-col max-w-[60vw] font-black"
        style={{
          fontSize: "calc(1.5rem + 7vw)",
          backgroundImage: `url('/img/featured_projects_backdrop.svg')`,
        }}
      >
        <span data-aos="fade-left">Featured</span>
        <span
          data-aos="fade-right"
          className=" stroke-black text-transparent h-fit str ml-auto"
        >
          Projects
        </span>
      </h1>

      <p className="text-center my-10 text-[1.1rem]">
        {"Check Out some of my creations! I'm sure you'd love it"}
      </p>
      <div className="flex flex-wrap w-full h-fit my-5 hover:bg-orange-100 dark:hover:bg-[rgba(62,37,13,0.25)] duration-300 p-3 rounded-xl">
        <div
          className="mx-0 group flex-1 mr-3 rounded-xl overflow-hidden h-full aspect-video w-full bg-center bg-contain bg-no-repeat"
          style={{ backgroundImage: `url('${projectImages[0].url}')` }}
        >
          <div className="w-full h-full flex items-center justify-center rounded-tr-[100%] group-hover:rounded-tr-[0%] bg-amber-900/30 translate-x-[-100%] group-hover:translate-x-0 duration-700">
            <Link
              className="bg-white underline py-4 px-7 scale-0 delay-300 opacity-0 group-hover:opacity-100 group-hover:scale-100 rounded-full"
              href={`${previewlink}`}
            >
              Preview
            </Link>
          </div>
        </div>
        <div className="flex flex-col flex-1 min-w-[300px] px-4">
          <h1 className="mt-4" style={{ fontSize: "calc(1.2rem + 0.5vw)" }}>
            Project Name: <span className="font-bold">{name}</span>
          </h1>
          <h1 className="mb-3" style={{ fontSize: "calc(1.2rem + 0.5vw)" }}>
            Created: <span className="font-bold">{startdate}</span>
          </h1>
          <div className="flex flex-wrap p-2">
            <p
              className="p-2 mx-3 rounded-full dark:bg-orange-400 dark:text-black bg-black text-orange-400 text-[0.8rem]"
              key={projectCategory.id}
            >
              {projectCategory.name}
            </p>
          </div>
          <p className="my-4 dark:text-white">
            <span className="font-bold dark:text-white">Description:</span>{" "}
            {description}
          </p>
          <div className="flex w-full justify-between">
            <Link href={githublink} passHref>
              <p className="dark:text-white text-black hover:underline">
                Github
              </p>
            </Link>
            <Link href={previewlink} passHref>
              <p className="dark:text-white text-black hover:underline">
                Preview
              </p>
            </Link>
          </div>

          {/* {!featured ? (
            <Link href={"/projects"} className="mt-4" passHref>
              <p className="group font-bold">
                {"Projects"} <span className="group-hover:ml-3">{">"}</span>
              </p>
            </Link>
          ) : null} */}
        </div>
      </div>
    </div>
  );
}
