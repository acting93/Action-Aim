import React from 'react';
import '../SCSS/HomePage.css'
import CarouselFunctions from './HomePageSub/CarouselFunctions';
import CarouselElement from './HomePageSub/CarouselElement/CarouselElement'; 
import HomePageInfo from './HomePageSub/HomePageInfo';

const HomePage = () => {
    return ( 
        <>
            <CarouselFunctions render={(slide) => <CarouselElement slide={slide}/>} /> 
            <HomePageInfo />
        </>
     );
};
 
export default HomePage;