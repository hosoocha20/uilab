import React from 'react'
import { NavbarsComponents } from '../uiComponents/NavbarsComponents'

const Navbars = () => {
  return (
    <div className="font-inter  flex-1 min-w-[calc(100vw-250px)] bg-background flex justify-center pt-6 pb-[5rem] px-[3rem] text-text">
        <div className=" w-[1200px] max-w-full  flex flex-col gap-[2.5rem]">
            <h1 className="text-[2.1rem] font-bold">Navbars</h1>
            <NavbarsComponents />
        </div>
    </div>
  )
}

export default Navbars