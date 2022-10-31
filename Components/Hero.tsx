import parser from 'html-react-parser'

interface ComProps{
    title:string,
    subtitle:string,
    content:string,
    img:string
}

export default function Hero({title, subtitle, content, img}:ComProps) {
  return (
    <div className='flex justify-between flex-wrap p-4 items-center w-full min-w-[330px] dark:text-cyan-400 text-black'>
        <div className="flex-1 max-w-[500px] flex flex-col">
            <h1 className='font-black ' style={{fontSize:'calc(1rem + 1.5vw)'}}>
                {title}
            </h1>
            <h3 className='mb-2 font-light dark:font-extralight dark:text-white' style={{fontSize:'calc(0.6rem + 0.25vw)'}}>
                <em>{subtitle}</em>
            </h3>
            <div className='dark:text-white'>
                {parser(content)}
            </div>
        </div>
        <div className='flex-[0.4] min-w-[250px] mx-auto aspect-square rounded-full bg-center bg-cover my-5' style={{backgroundImage:`url(${img})`}}></div>
    </div>
  )
}
