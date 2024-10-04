import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
function Navbar() {
  const navigate = useNavigate()
  return (
    <>
     <div className='w-full flex justify-between items-center font-semibold'>
        <div className='flex items-center gap-2'>
            <img onClick={()=>navigate(-1)}src={assets.arrow_left} alt="" className='cursor-pointer bg-black rounded-2xl w-8 p-2' />
            <img onClick={()=>navigate(1)}src={assets.arrow_right} alt="" className='cursor-pointer bg-black rounded-2xl w-8 p-2' />
        </div>
        <div className='items-center flex gap-4'>
            <p className='bg-white text-black rounded-2xl text-[15px] hidden md:block px-4 py-1 cursor-pointer'>explore premium</p>
            <p className='bg-black rounded-2xl cursor-pointer text-[15px] py-1 px-3'>install app</p>
            <p className='bg-orange-500 w-7 h-7 rounded-full flex items-center  justify-center'>B</p>

        </div>

     </div>
     <div className='flex items-center mt-4 gap-2'>
          <p className='bg-white text-black rounded-2xl px-4 py-1'>All</p>
          <p className='bg-black rounded-2xl cursor-pointer px-4 py-1'>Music</p>
          <p className='bg-black rounded-2xl cursor-pointer px-4 py-1'>podcasts</p>
          
     </div>
    </>
  )
}

export default Navbar