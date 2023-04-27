import React from 'react'
import Product from './Product'
import '../styles/ProductRev.css'
const ProductRev = ({ProductReview}) => {
  return (
    <div className='Prouter'>
        <div>{<Product Pro={ProductReview[0]}/>}</div>
        <div>{<Product Pro={ProductReview[1]}/>}</div>
    </div>
    
  )
}

export default ProductRev