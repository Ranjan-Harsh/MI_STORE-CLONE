import React from 'react'
import '../styles/NavCard.css'

const NavCard = ({name, price, image}) => {
    return (
      <div className='Navcard'>
          <img src={image}></img>
          <p className='upperNa'>{name}</p>     
          <p className='bottomNa'>{price}</p>     
      </div>
    )
}

export default NavCard