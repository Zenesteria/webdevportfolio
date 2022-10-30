import {FaBars} from 'react-icons/fa'
import NavItem from './NavItem'
import { navData } from '../../site-data/navigation'
import SwitchTheme from './SwitchTheme'

export default function Nav() {
  return (
    <div className='flex items-center justify-between py-5 w-full h-[10vh]'>
        <ul className='flex'>
            {
                navData.map((nav, index) => {
                    return(
                        <NavItem
                            txt={nav.name}
                            path={nav.path}
                            key={index}
                        />
                    )
                })
            }
        </ul>

        <SwitchTheme/>
    </div>
  )
}
