import {FaSun} from 'react-icons/fa'
import {useState, useEffect} from 'react'
import {useTheme} from 'next-themes'

import { useColorMode } from '@chakra-ui/react'

export default function SwitchTheme() {
    const {toggleColorMode} = useColorMode();

    const {theme, setTheme} = useTheme()
    const [dark, setDark] = useState(false)
    const handleClick = () => {
        // HANDLES CLICK EVENT
        // toggleColorMode()
        if(theme == 'dark'){
          setDark(false)
          setTheme('light')
        }else{
          setDark(true)
          setTheme('dark')
        }
        // console.log(theme)
    }

    useEffect(() => {
      if(theme == 'dark'){
          setDark(true)
      }else{
        setDark(false)
      }

      () => {
        return console.log(dark)
      }
    },[theme,dark])
  return (
    <FaSun
        className=' bg-slate-500 text-[rgba(255,255,255,0.6)] p-2 text-[2rem] rounded-lg hover:text-[rgb(255,255,255)] cursor-pointer'
        onClick={handleClick}
    />
  )
}
