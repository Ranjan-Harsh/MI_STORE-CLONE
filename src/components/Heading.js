import React from 'react'
import '../styles/heading.css';
const Header = ({heading}) => {
  return (
    <div className='top'>
        <div className='side'>  </div>
        <div className='head'> {heading} </div>
        <div  className='side'>  </div>
    </div>
  )
}

export default Header