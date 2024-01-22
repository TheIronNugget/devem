import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import {Slide} from 'react-slideshow-image'

const slideImages=[
    {url: require('../../images/cfarcr.jpeg')},
    {url: require('../../images/ckart.jpeg')},
    {url: require('../../images/csidedr.jpeg')},
    ];

const divStyle={
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    height:"70vh",
    width:"100%",
    backgroundSize:"cover",
    backgroundPosition:"center"

}
const Carousel = () => {
  return (
    <div className="slide-container">
        <Slide>
            {slideImages.map((image, index) =>(
                <div key={index}>
                    <div style={{...divStyle, backgroundImage:`url(${image.url})`}}>
                    
                    </div>
                </div>

            ))}
        </Slide>
    </div>
  )
}

export default Carousel