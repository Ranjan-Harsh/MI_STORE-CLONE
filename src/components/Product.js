import React from 'react'
import '../styles/Product.css'
const Product = ({Pro}) => {
  return (
    <div className='procard'>
        <img src={Pro.image} alt='noimage'></img>
        <div>
            {Pro.review}
        </div>
        <span className='pll'>
            {Pro.name}
        </span>
        <span className='prr'>
            {Pro.price}
        </span>
    </div>
  )
}

export default Product