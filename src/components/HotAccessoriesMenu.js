import React from 'react'
import '../styles/HotAcessoriesmenu.css';
import {Link} from 'react-router-dom';
const HotAccessoriesMenu = () => {
  return (
    <div className='hot'>
      <Link className='hotpart' to='/music'>Music Store</Link>
      <Link className='hotpart' to='/smartdevices'>Smart Devices</Link>
      <Link className='hotpart' to='/home'>Home</Link>
      <Link className='hotpart' to='/lifestyle'>Lifestyle</Link>
      <Link className='hotpart' to='/mobileaccessories'>Mobile Accessories</Link>
    </div>
  )
}

export default HotAccessoriesMenu