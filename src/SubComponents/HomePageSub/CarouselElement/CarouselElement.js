import React from 'react';
import '../../../SCSS/HomePage.css'

const CarouselElement = (props) => {
       
    const {slide} = props;
    return ( 
        <>
            {slide}
        </>
     );
}
 
export default CarouselElement;