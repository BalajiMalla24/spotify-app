import React, { useContext } from 'react'
import { PlayerContext } from '../context/Playercontext'

function SongItem({name , image ,desc , id}) {
const{playwithid} = useContext(PlayerContext)
  return (
    <div onClick={()=>playwithid(id)}className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
        <img src={image} alt="" className='rounded' />
        <p className='font-bold mt-2 mb-1'>{name}</p>
        <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default SongItem