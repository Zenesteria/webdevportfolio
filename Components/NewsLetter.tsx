import React, { useState } from 'react'
import {Input, Button} from '@chakra-ui/react'



export default function NewsLetter() {
    const [email, setEmail] = useState('')

    const handleClick = async() => {
        // Handle Email sub
        const subscribe = await fetch('/api/subscribe', {
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({
                email
            })
        })
    }
  return (
    <div className='flex flex-col justify-center w-[80%] min-w-[330px] mx-auto h-fit min-h-[30vh] my-20 p-4 rounded-xl dark:bg-[#101629] dark:border-none border border-[#101629] dark:text-white text-black'>
        <h1 className='font-bold mb-3' style={{fontSize:'calc(1rem + 0.5vw)'}}>
            Subscribe to the newsletter
        </h1>
        <p className=''>
            Get emails from me about web development, tech, and early access to new articles.
        </p>
        <div className='w-full flex justify-between items-center my-4 border rounded-lg overflow-hidden'>
            <Input border={'none'} value={email} onChange={(e) => setEmail(e.target.value)} className='bg-transparent border-none outline-none w-full p-4' placeholder='example@gmail.com'/>
            <Button borderRadius={'none'} onClick={handleClick} className='dark:bg-cyan-400 dark:text-[#101629] bg-[#101629] text-cyan-400 font-semibold p-4 rounded-md'>
                Subscribe
            </Button>
        </div>
    </div>
  )
}
