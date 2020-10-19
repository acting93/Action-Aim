import React from 'react';
import '../SCSS/HomePage.css'
import Carousel from './HomePageSub/Carousel';
import HomePageInfo from './HomePageSub/HomePageInfo';

const HomePage = () => {
    return ( 
        <>
            <Carousel />
            <HomePageInfo />
        </>
     );
}
 
export default HomePage;