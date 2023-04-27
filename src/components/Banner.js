import React from 'react'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
const Banner = ({start}) => {
  return (
      
          <Carousel fade>
            { 
                start.map((item) => (
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={item.image}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <h5>{item.source}</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))
            }
            
    </Carousel>
    
  )
}

export default Banner