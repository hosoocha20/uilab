import React from 'react'
import { FcIdea } from "react-icons/fc";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='hidden tablet:flex flex-col text-inter border-r bg-background w-[250px] sticky top-lg-nav left-0 h-[calc(100vh-3.2rem)] px-4 py-6   gap-[1rem] overflow-y-auto'>
        <div className='flex items-center gap-1 '>
            <FcIdea  className='text-[1.2rem]  mb-1'/>
            <p className='font-medium text-primary cursor-pointer'>Getting Started</p>
        </div>
        <div className='text-[0.95rem]'>
            <h3 className='font-medium py-1 '>Animations</h3>
            <div className='flex flex-col  *:py-1 *:pl-3 *:border-l hover:*:border-turquoise-400 *:cursor-pointer'>
                <Link to={'/components/text-reveal'}>Text Reveal</Link>
                <Link to={'/components/text-animation'}>Text Animation</Link>
            </div>
        </div>
        <div className='text-[0.95rem]'>
            <h3 className='font-medium py-1 '>Transitions</h3>
            <div className='flex flex-col  *:py-1 *:pl-3 *:border-l hover:*:border-turquoise-400 *:cursor-pointer'>
                <p>Page Transition</p>
                <p>Page Loaders</p>
            </div>
        </div>
        <div className='text-[0.95rem]'>
            <h3 className='font-medium py-1 '>Menus & Navbars</h3>
            <div className='flex flex-col  *:py-1 *:pl-3 *:border-l hover:*:border-turquoise-400 *:cursor-pointer'>
                <Link to={'/components/menu-icons'}>Menu Icons</Link>
                <p>Dropdown Menu</p>
                <Link to={'/components/menus'}>Menus</Link>
                <Link to={'/components/navbars'}>Navbars</Link>
                <p>Fullscreen Navbar</p>
            </div>
        </div>
        <div className='text-[0.95rem]'>
            <h3 className='font-medium py-1 '>Data display</h3>
            <div className='flex flex-col  *:py-1 *:pl-3 *:border-l hover:*:border-turquoise-400 *:cursor-pointer'>
                <p>Grid</p>
                <p>Gallery</p>
                <p>Card</p>
                <p>Wheel</p>
            </div>
        </div>
        <div className='text-[0.95rem]'>
            <h3 className='font-medium py-1 '>Elements</h3>
            <div className='flex flex-col  *:py-1 *:pl-3 *:border-l hover:*:border-turquoise-400 *:cursor-pointer'>
                <p>Buttons</p>
                <p>Inputs</p>
                <p>Links</p>
                <p>Notifications</p>
            </div>
        </div>
        <div className='text-[0.95rem]'>
            <h3 className='font-medium py-1 '>Other Elements</h3>
            <div className='flex flex-col  *:py-1 *:pl-3 *:border-l hover:*:border-turquoise-400 *:cursor-pointer'>
                <p>Mouse Scroll</p>
                <p>Loaders</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar