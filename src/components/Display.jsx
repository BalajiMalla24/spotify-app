import React, { useRef, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import DisplayHome from './DisplayHome';
import DisplayAlbum from './DisplayAlbum';
import { albumsData } from '../assets/assets';

function Display() {
  const displayref = useRef();  // Create a reference to the DOM element
  const location = useLocation();  // Get the current location (URL path)
  
  const isAlbum = location.pathname.includes("album");  // Check if the path includes "album"
  const albumid = isAlbum ? location.pathname.slice(-1) : "";  // Extract album ID from the path if it exists
  const bgcolor = albumsData[Number(albumid)].bgColor;  // Get the background color based on the album ID

  useEffect(() => {
    if (isAlbum) {
      // If viewing an album, set a gradient background
      displayref.current.style.background = `linear-gradient(${bgcolor}, #121212)`;
    } else {
      // Otherwise, set a solid background color
      displayref.current.style.background = `#121212`;
    }
  });

  return (
    <div 
      className='w-[100%] m-2 px-2 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'
      ref={displayref} // attaching the reference to the div
    >
      <Routes>
        <Route path='/' element={<DisplayHome />} />
        <Route path='/album/:id' element={<DisplayAlbum />} />
      </Routes> 
    </div>
  );
}

export default Display;

