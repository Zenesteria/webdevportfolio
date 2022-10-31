import Link from 'next/link'
import {useTheme} from 'next-themes'

interface compProps{
    img:string
    title:string
    date:string,
    category:{
        id:string,
        name:string
    },
    description:string,
    githubLink:string,
    previewLink:string,
    featured:boolean
}

export default function FeaturedProject({img, title, date, category, description, githubLink, previewLink, featured}:compProps) {
    const {theme} = useTheme()
  return (
    <div className='flex flex-wrap w-full h-fit my-5'>
        <div className="flex flex-1 min-w-[330px] min-h-[300px] max-w-[500px] bg-center bg-cover bg-no-repeat mr-3 rounded-xl" style={{backgroundImage:`url('${img}')`}}>

        </div>
        <div className="flex flex-col flex-1 min-w-[300px] px-4">
            <h1 className='mt-4' style={{fontSize:'calc(1.2rem + 0.5vw)'}}>
                Project Name: <span className='font-bold'>{title}</span>
            </h1>
            <h1 className='mb-3' style={{fontSize:'calc(1.2rem + 0.5vw)'}}>
                Created: <span className='font-bold'>{date}</span>
            </h1>
            <div className="flex flex-wrap p-2">
                <p className='p-2 mx-3 rounded-full dark:bg-cyan-400 dark:text-black bg-black text-cyan-400 text-[0.8rem]' key={category.id}>
                    {category.name}
                </p>
            </div>
            <p className='my-4 dark:text-white'>
                <span className='font-bold dark:text-cyan-400'>Description:</span> {description}
            </p>
            <div className="flex w-full justify-between">
                <Link href={githubLink} passHref>
                    <p className='dark:text-white text-black hover:underline'>
                        Github
                    </p>
                </Link>
                <Link href={previewLink} passHref>
                    <p className='dark:text-white text-black hover:underline'>
                        Preview
                    </p>
                </Link>
            </div>

            {!featured?<Link href={'/projects'} className='mt-4' passHref>
                <p className='group font-bold'>
                    {'Projects'} <span className='group-hover:ml-3'>{'>'}</span>
                </p>
            </Link>:null}
        </div>
    </div>
  )
}
