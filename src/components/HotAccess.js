import React from 'react'
import HotCover from './HotCover'
import '../styles/HotAccess.css'


const HotAccess = ({music, musicCover,smartDevice,smartDeviceCover,home,homeCover,lifeStyle,lifeStyleCover,mobileAccessories,mobileAccessoriesCover}) => {
  return (
    <div className='hOuter'>
      {/* this div is for the various cover  */}

        <div className='hleft'>
        <img src={musicCover || smartDeviceCover || homeCover || lifeStyleCover || mobileAccessoriesCover}></img>
        </div>

      {/* This div is for cards that is one the right side  */}
        
        <div className='hright'>
            {
              music && music.map((item) => (
              <HotCover namee={item.name} pricee={item.price} imagee={item.image}></HotCover>
            ))
            }
            {
              smartDevice && smartDevice.map((item) => (
                <HotCover namee={item.name} pricee={item.price} imagee={item.image}></HotCover>
              ))
            }
            {
              home && home.map((item) => (
                <HotCover namee={item.name} pricee={item.price} imagee={item.image}></HotCover>
              ))
            }
            
            {
              lifeStyle && lifeStyle.map((item) => (
                <HotCover namee={item.name} pricee={item.price} imagee={item.image}></HotCover>
              ))
            }

            {
              mobileAccessories && mobileAccessories.map((item) => (
                <HotCover namee={item.name} pricee={item.price} imagee={item.image}></HotCover>
              ))
            } 

            <HotCover imagee='https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg'></HotCover>

        </div>


    </div>
  )
}

export default HotAccess