import React from 'react'
import { FcIdea } from "react-icons/fc";

const Sidebar = () => {
  return (
    <div className='text-Inter border-r bg-background w-[250px] sticky top-lg-nav left-0 h-[calc(100vh-3.2rem)] px-4 py-6 flex flex-col gap-[1rem] overflow-y-auto'>
        <div className='flex items-center gap-1 '>
            <FcIdea  className='text-[1.2rem]  mb-1'/>
            <p className='font-medium text-primary'>Getting Started</p>
        </div>
        <div className='text-[0.95rem]'>
            <h3 className='font-medium py-1 '>Animations</h3>
            <div className='  *:py-1 *:pl-3 *:border-l'>
                <p>Text Reveal</p>
                <p>Text Animation</p>
            </div>
        </div>
        <div className='text-[0.95rem]'>
            <h3 className='font-medium py-1 '>Transitions</h3>
            <div className='  *:py-1 *:pl-3 *:border-l'>
                <p>Page Transition</p>
            </div>
        </div>
        <div className='text-[0.95rem]'>
            <h3 className='font-medium py-1 '>Menu</h3>
            <div className='  *:py-1 *:pl-3 *:border-l'>
                <p>Menu Bar</p>
            </div>
        </div>
        <div className='text-[0.95rem]'>
            <h3 className='font-medium py-1 '>Navigation</h3>
            <div className='  *:py-1 *:pl-3 *:border-l'>
                <p>Fullscreen Navbar</p>
                <p>Responsive Navbar</p>
            </div>
        </div>
        <div className='text-[0.95rem]'>
            <h3 className='font-medium py-1 '>Data Display</h3>
            <div className='  *:py-1 *:pl-3 *:border-l'>
                <p>Grid</p>
                <p>Gallery</p>
                <p>Card</p>
                <p>Wheel</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar