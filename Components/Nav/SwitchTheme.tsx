import {FaSun} from 'react-icons/fa'
import {useTheme} from 'next-themes'

export default function SwitchTheme() {
    const {theme, setTheme} = useTheme()
    const handleClick = () => {
        // HANDLES CLICK EVENT
        if(theme == 'dark'){
          setTheme('light')
        }else{
          setTheme('dark')
        }
        console.log(theme)
    }
  return (
    <FaSun
        className=' bg-slate-500 text-[rgba(255,255,255,0.6)] p-2 text-[2rem] rounded-lg hover:text-[rgb(255,255,255)] cursor-pointer'
        onClick={handleClick}
    />
  )
}
