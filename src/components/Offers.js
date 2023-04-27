import React from 'react'
import '../styles/Offers.css'
const Offers = ({Offers}) => {
  return (
    <div className='tmp'>
        {   
            Offers.map((item) => (
                <div className='rrr'>
                    <a href={item.url}>
                        <img src={item.image} alt='not'></img>
                    </a>
                </div>
            ))
        }
    </div>
  )
}

export default Offers