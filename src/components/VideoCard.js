import React from 'react'
import '../styles/VideoCard.css'
const pb = <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M16 37.85V9.85L38 23.85ZM19 23.85ZM19 32.4 32.45 23.85 19 15.3Z"/></svg>

const VideoCard = ({name, image}) => {
  return (
    <div className='videoouter'>
      <a>
      <img src={image}></img>
      </a>
        
        <div className='vsvg'>{pb}</div>
        <div>{name}</div>
    </div>
  )
}

export default VideoCard