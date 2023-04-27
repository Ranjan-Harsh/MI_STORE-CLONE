import React from 'react'
import '../styles/StarProduct.css'

const StarProduct = ({starProduct}) => {
  return (
    <div className='outer'>
      <div className='lef'>
        <a href={starProduct[0].url}> <img src={starProduct[0].image} alt ='noimage'></img> </a>
      </div>
      <div className='righ'>
          <a href={starProduct[1].url}> <img src={starProduct[1].image} alt ='noimage'></img> </a>
           <a href={starProduct[2].url}> <img src={starProduct[2].image} alt ='noimage'></img> </a>
          <a href={starProduct[3].url}> <img src={starProduct[3].image} alt ='noimage'></img> </a> 
      </div>
    </div>

  )
}

export default StarProduct