import { useContext, useState } from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'
import{ PlayerContext }from './context/Playercontext'


function App() {

const {audioref ,track} = useContext(PlayerContext)
  return (
    <>
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex' >
       <Sidebar />
       <Display/>
      </div>
      <Player/> 
      <audio preload='auto'  src={track.file} ref = {audioref}></audio>
    </div>
     
    </>
  )
}

export default App
