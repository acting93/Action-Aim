import React,{useState,useEffect,useRef,useMemo, useCallback} from 'react'; 
import '../../SCSS/HomePage.css';
import carouselSlides from '../../carousel.json';

const CarouselFunctions = (props) => {
   
    const carouselRef = useRef(null);
    const elementRef = useRef(null);
    const [currentValue,setCurrentValue] = useState(0);
    const [carousel,setCarousel] = useState(carouselSlides.slides);
    const createNavBtn = carousel.map(item => <span className='navBtn' style={currentValue === item.id ? {background:"red"} : null} onClick={()=> scrollByBtn(item.id)} key={item.id} id={item.id}></span>);

    const slide = carousel.map(element => {
        return <div className='carousel-element' ref={elementRef} key={element.id} id={element.id}>
            <img src={require(`../../img/${element.img}`)} alt='' />
        </div>
    });

    const movingSlide =()=>{
            const slider = document.querySelector('.carousel-content');
            const element = document.querySelector('.carousel-element');
            slider.style.transform = `translateX(` +(-element.offsetWidth * currentValue) + `px)`;
            slider.style.transition = '0.8s';
    };

    const nextSlide =()=>{
        const value = currentValue;
        setCurrentValue(value + 1);
        if(currentValue === slide.length -1){
            setCurrentValue(0);
        }
    };  


    const scrollByBtn =(id)=>{
        setCurrentValue(id); 
        const slider = document.querySelector('.carousel-content');
        const element = document.querySelector('.carousel-element');
        slider.style.transform = `translateX(` +(-element.offsetWidth * id) + `px)`;
        slider.style.transition = '0.8s';
    };

    useEffect(()=>{
        movingSlide();
    },[currentValue]);


    return ( 
        <>
            <div className='carousel'>
                <div className='navBtnContent'>
                    {createNavBtn}
                </div>
                <button onClick={nextSlide} className='nextBtn'>Next</button>
                <div className='carousel-content' ref={carouselRef}>
                    {props.render(slide)}
                </div>
            </div>
        </>
     );
}
 
export default CarouselFunctions;