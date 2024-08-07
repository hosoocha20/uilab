import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='w-full border-b sticky top-0 h-lg-nav bg-background font-inter  flex items-center gap-[3rem] text-text z-10'>
        <p className='text-[1.5rem] font-bold tracking-wider   w-[220px] text-center '><span className='text-turquoise-400'>UI</span>Lab</p>
        <div className='font-[500] tracking-wide flex gap-[3rem]   flex-1'>
            <Link to={'/components'}>Components</Link>
            <p>Themes</p>
            <p>Resources</p>
            <p>FAQ</p>
        </div>
        <p className='w-[220px] text-center'>Mode</p>
    </nav>
  )
}

export default Navbar