import React from 'react'
import VideoCard from './VideoCard'
import '../styles/Videos.css'
const Videos = ({Videos}) => {
  return (
    <div className='videomain'>
        {
            Videos.map((item) => (
                <VideoCard name={item.name} image={item.image}/>
            ))
        }
    </div>
  )
}

export default Videos