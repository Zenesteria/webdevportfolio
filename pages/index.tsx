import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { FeaturedProject, Hero, NewsLetter, TitleTxt } from '../Components'
import { FeaturedPost } from '../Components/posts'
import { gqlModels } from '../interface'
import { getPageContent, getPosts, getProjects } from '../Services'

interface PageProps{
  pageContents:gqlModels['pageContents'],
  posts:gqlModels['posts'],
  projects:gqlModels['projects']
}

const Home: NextPage<PageProps> = ({pageContents,posts,projects}:PageProps) => {
  const heroData = pageContents.filter(content => {return content.name == 'mainpageheading'})[0]
  const featuredPostsData = posts.filter(post => {return post.featured}).slice(0,2)
  const featuredProjectData = projects.filter(project => {return project.featured})[0]
  return (
    <div>
      <Head>
        <title>Abdurrahman Aderinto - Fullstack Developer</title>
        <meta name="description" content="Abdurrahman Adebisi Aderinto's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Hero
        title={heroData.title}
        subtitle={heroData.subtitle}
        content={heroData.content.html}
        img={heroData.images[0].url}
      />

      <TitleTxt size='calc(1.2rem + 1vw)'>
          Featured Posts
      </TitleTxt>

      <div className="flex flex-wrap w-full h-fit my-5">
          {
            featuredPostsData.map((post) => {
                return(
                  <FeaturedPost
                    txt={post.excerpt}
                    key={post.id}
                    link={post.slug}
                    linkText={post.title}
                  />
                )
            })
          }
      </div>

          <br /> <br />

      <TitleTxt size='calc(1.2rem + 1vw)'>
          Current Project
      </TitleTxt>

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

      <NewsLetter/>
    </div>
  )
}


export const getStaticProps:GetStaticProps = async () => {
    const pageContents = await getPageContent();
    const posts = await getPosts();
    const projects = await getProjects();

    return{
      props:{
        pageContents,posts,projects
      },
      revalidate:60
    }
}

export default Home
