import React from 'react'
import '../styles/HotCover.css'
const HotCover = ({namee,pricee,imagee}) => {
  return (
    <div className='hcover'>
        <img src={imagee}></img>
        <p className='hcn'>{namee}</p>
        <p className='hcp'>{pricee}</p>
    </div>
  )
}

export default HotCover