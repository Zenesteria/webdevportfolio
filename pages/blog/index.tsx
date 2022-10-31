import {useState, useMemo} from 'react'

import { GetStaticProps, NextPage } from "next"
import { gqlModels } from "../../interface"
import { getPageContent, getPosts } from "../../Services"
import parser from 'html-react-parser'
import {Input} from '@chakra-ui/react'

import Pagination from '../../utils/pagination'
import { Post } from '../../Components/posts'

interface PageProps{
    pageContents:gqlModels['pageContents'],
    posts:gqlModels['posts']
}


let PageSize = 4;

const Blog:NextPage<PageProps> = ({pageContents, posts}:PageProps) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [searchValue, setSearchValue] = useState('')
    const paginationPosts= searchValue.length <1? posts : posts.filter((post) => post.title.toLowerCase().includes(searchValue.toLowerCase()))


    const currentPostData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        // return posts.slice(firstPageIndex, lastPageIndex);
        return paginationPosts.slice(firstPageIndex, lastPageIndex);
    }, [paginationPosts, currentPage])


    const blogPageContent = pageContents.filter(content => content.name == 'blogcaption')[0]
  return (
    <div className="flex flex-col items-center text-center">
        <h1 className="font-bold" style={{fontSize:'calc(2rem + 1vw)'}}>
            Blog
        </h1>
        <div className="max-w-[600px] text-[0.9rem] dark:text-white text-black italic">
            {parser(blogPageContent.content.html)}
        </div>
        <Input
            w={'60%'}
            _hover={{}}
            border='2px solid rgb(34 211 238) !important'
            className="p-5 my-5 rounded-xl bg-transparent border dark:border-cyan-400 dark:placeholder:text-cyan-400 placeholder:text-black outline-none"
            placeholder="Search Articles. . ."
            onChange={(e) => setSearchValue(e.target.value)}
        />
        <>
            <div className="flex flex-col my-10 w-full text-left min-h-screen">
                <h1 className='dark:text-white font-bold' style={{fontSize:'calc(1rem + 1vw)'}}>
                    Posts
                </h1>
                {currentPostData.length > 0 ? currentPostData.map((post) => {
                    return (
                        <Post
                            key={post.id}
                            title={post.title}
                            description={post.excerpt}
                            slug={post.slug}
                        />
                    )
                }) : 'NO MATCHES FOUND'}
            </div>
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={paginationPosts.length}
                pageSize={PageSize}
                onPageChange={(page:any) => setCurrentPage(page)}
            />
        </>
    </div>
  )
}

export const getStaticProps:GetStaticProps = async () => {
    const pageContents = await getPageContent();
    const posts = await getPosts();
    return{
        props:{
            pageContents, posts
        }
    }
}

export default Blog;
