import React from 'react'
import {Nav,Footer} from '../index'

const Layout = ({children}:{children:React.ReactElement}) => {
  return(
    <div className="flex w-full min-h-screen bg-white dark:bg-[#00002B] dark:text-cyan-400 font-['raleway']">
      <div className='w-[70%] min-w-[330px] mx-auto'>
        <Nav/>
          {children}
        <Footer/>
      </div>
    </div>
  )
}


export default Layout
