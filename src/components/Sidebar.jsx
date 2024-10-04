import React from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'
function Sidebar() {
    const nav = useNavigate()
  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex '>
        <div className='bg-[#121212] h-[15%] flex flex-col justify-around'>
            <div  onClick={()=>nav('/')} className="flex items-center gap-3 pl-8 cursor-pointer h-full hover:bg-[#ffffff26]">
                <img className='w-6'src={assets.home_icon} alt="" />
                <p className='font-bold'>Home</p>
            </div>
            <div className="flex items-center gap-3 pl-8 cursor-pointer h-full hover:bg-[#ffffff26]">
                <img className='w-6'src={assets.search_icon} alt="" />
                <p className='font-bold'>Search</p>
            </div>

        </div>
        <div className='h-[85%]  bg-[#121212] rounded'>
            <div className='justify-between p-4 items-center flex'>
                   <div className='gap-3 flex items-center '>
                    <img  className='w-8'src={assets.stack_icon} alt="" />
                    <p className='font-semibold'>Your library</p>
                   </div>
                   <div className='flex gap-3'>
                      <img className='w-5 cursor-pointer' src={assets.arrow_icon} alt="" />
                      <img className='w-5 cursor-pointer' src={assets.plus_icon} alt="" />
                   </div>
            </div>
            <div className="flex flex-col items-start p-4 font-semibold m-2 bg-[#242424] rounded gap-1 justify-start">
                <h1>Create your first playlist</h1>
                <p className='font-light '>we will help you</p>
                <button className='px-4 bg-white text-black rounded-3xl py-2 mt-3'>create playlist</button>
            </div>
            <div className="flex flex-col items-start p-4 font-semibold m-2 bg-[#242424] rounded gap-1 justify-start">
                <h1>find some podcasts to follow</h1>
                <p className='font-light '>we'll keep you update on new episodes</p>
                <button className='px-4 bg-white text-black rounded-3xl py-2 mt-3'>Browse podcasts</button>
            </div>

        </div>
 
    </div>
  )
}

export default Sidebar