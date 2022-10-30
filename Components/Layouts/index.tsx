import React from 'react'
import {Nav,Footer} from '../index'

const Layout = ({children}:{children:React.ReactElement}) => {
  return(
    <div className="flex w-full min-h-screen dark:bg-[#00002B] bg-white">
      <div className='w-[80%] mx-auto'>
        <Nav/>
          {children}
        <Footer/>
      </div>
    </div>
  )
}


export default Layout
