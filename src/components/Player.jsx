import React, { useContext } from 'react'
import{assets} from '../assets/assets'
import {PlayerContext} from '../context/Playercontext'
function Player() {
  const {seekBar , seekBg ,playstatus , play , pause , track , time , prev , next,seeksong } = useContext(PlayerContext)
  return (
    <div className='h-[10%] justify-between flex bg-black items-center text-white px-4'>
   <div className='hidden lg:flex items-center gap-4'>
    <img  className='w-12' src={track.image} alt="" />
        <div>
            <p>{track.name}</p>
            <p>{track.desc.slice(0,12)}</p>
        </div>
   </div>
   <div className='flex flex-col m-auto items-center gap-1'>
    <div className='flex gap-4 '>
        <img className='w-4 cursor-pointer'src={assets.shuffle_icon} alt="" />
        <img onClick={prev} className='w-4 cursor-pointer'src={assets.prev_icon}  alt="" />
        {playstatus ?  <img className='w-4 cursor-pointer'src={assets.pause_icon} onClick={pause} alt="" /> :
                <img className='w-4 cursor-pointer'src={assets.play_icon} onClick={play} alt="" />}
       

        <img onClick={next} className='w-4 cursor-pointer'src={assets.next_icon}  alt="" />
        <img className='w-4 cursor-pointer'src={assets.loop_icon} alt="" />
    </div>
    <div className='flex items-center gap-5'>
        <p>{time.currentTime.minute}:{time.currentTime.second}</p>
        <div onClick={seeksong} ref={seekBg} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
         <hr className='rounded-full cursor-pointer bg-green-700 h-1 border-none w-[0%]' ref={seekBar}/>
        </div>
        <p>{time.totalTime.minute}:{time.totalTime.second}</p>

    </div>
   </div>
   <div className='hidden lg:flex items-center gap-2 opacity-75'>
     <img src={assets.plays_icon} alt="" className='w-4' />
     <img src={assets.mic_icon} alt="" className='w-4' />
     <img src={assets.queue_icon} alt="" className='w-4' />
     <img src={assets.speaker_icon} alt="" className='w-4' />
     <img src={assets.volume_icon} alt="" className='w-4' />
     <div className='w-20 h-1 bg-white rounded'> </div>
     <img src={assets.mini_player_icon} alt="" className='w-4' />
     <img src={assets.zoom_icon} alt="" className='w-4' />
   </div>
   </div>
  )
}

export default Player