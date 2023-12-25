import { GetStaticProps, NextPage } from "next"
import { FeaturedProject, Project, TitleTxt } from "../Components"
import { gqlModels } from "../interface"
import { getProjectCategories, getProjects } from "../Services"


import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Head from "next/head"


interface PageProps{
    projects:gqlModels['projects'],
    projectCategories:gqlModels['projectCategories']
}

const Projects:NextPage<PageProps> = ({projects, projectCategories}:PageProps) => {

    const featuredProjectData = projects.filter(project => {return project.featured})[0]
  return (
    <div>
      <Head>
        <title>{`Abdurrahman Aderinto's Projects`}</title>
        <meta
          name="description"
          content="Abdurrahman Adebisi Aderinto's Projects - Explore the fusion of Web Development, Artificial Intelligence, and Internet of Things on our project page. Immerse yourself in a showcase of innovative projects, from responsive web applications to advanced AI solutions and IoT integrations. Witness the seamless synergy of creativity and technology in this concise collection that defines the forefront of digital innovation."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TitleTxt size="calc(1rem + 1vw)">Featured Project</TitleTxt>

      <FeaturedProject
        img={featuredProjectData.projectImages[0].url}
        title={featuredProjectData.name}
        date={featuredProjectData.startdate}
        category={featuredProjectData.projectCategory}
        description={featuredProjectData.description}
        githubLink={featuredProjectData.githublink}
        previewLink={featuredProjectData.previewlink}
        featured={true}
      />

      <Tabs my={"10"} variant="enclosed">
        <TabList overflowX={"auto"} overflowY="hidden" minW="300px">
          {projectCategories.map((category) => {
            return (
              <Tab color={"orange.400"} key={category.id} minW="130px">
                {category.name}
              </Tab>
            );
          })}
        </TabList>

        <TabPanels>
          {projectCategories.map((category) => {
            return (
              <TabPanel className="flex flex-wrap" key={category.id}>
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
              </TabPanel>
            );
          })}
        </TabPanels>
      </Tabs>
    </div>
  );
}

export const getStaticProps:GetStaticProps = async () => {
    const projects = await getProjects();
    const projectCategories = await getProjectCategories();
    return{
        props:{
            projects,projectCategories
        },
        revalidate:60
    }
}

export default Projects
