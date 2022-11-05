import React from 'react'
import Bg from '../animated-bg/Bg'
import {Nav,Footer} from '../index'

const Layout = ({children}:{children:React.ReactElement}) => {
  return(
    <div className="flex relative w-full min-h-screen bg-white dark:bg-[#00002B] dark:text-cyan-400 text-black font-['raleway']">
      <Bg/>
      <div className='w-[70%] min-w-[330px] mx-auto z-[20]'>
        <Nav/>
          {children}
        <Footer/>
      </div>
    </div>
  )
}


export default Layout
