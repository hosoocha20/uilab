import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'

const Layout = () => {
  return (
    <>
        <Navbar />
        
        <div className='flex'>
            <Sidebar />
            <Outlet />
        </div>
    </>
  )
}

export default Layout