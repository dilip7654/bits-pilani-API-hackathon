import React from 'react'
import { FaRegCircleUser } from "react-icons/fa6";
const NavHome = () => {
  return (
    <div className='bg-white h-20 w-[100%] m-0 ' 
    style={{
      backgroundImage: 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)',
      
    }}>
                <div className='flex justify-between'>
                    <p className='font-bold text-[2.6rem] mt-2 ml-6 text-red-600'>LifeLine Dev</p>
                    <p className='flex justify-center gap-4 mr-6'>
                    <a href="/Home" className='text-[1.3rem]  mt-5 bg-blue-500 text-white rounded h-8 w-20 text-center'>Logout</a>
                    <a href="/Contact" className='font-bold text-[1.2rem]'><FaRegCircleUser className='ml-3 mt-2 '/> Profile</a>
                    </p>
                
                </div>
                
    </div>
  )
}

export default NavHome
