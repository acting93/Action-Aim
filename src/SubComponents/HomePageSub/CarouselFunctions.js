import React,{useState,useEffect,useRef} from 'react'; 
import '../../SCSS/HomePage.css';
import carouselSlides from '../../carousel.json';


const CarouselFunctions = (props) => {
   
    const carouselRef = useRef(null);
    const elementRef = useRef(null);
    const [currentValue,setCurrentValue] = useState(0);
    const [carousel,setCarousel] = useState(carouselSlides.slides);
    const [signal,setSignal] = useState(false);

    //funkcja zwraza spany dla każdego elementu do przechodzenia między elementami karuzeli
     const createNavBtn = carousel.map(item => <span className='navBtn' style={currentValue === item.id ? {background:"#007ea5"} : null} onClick={()=> scrollByBtn(item.id)} key={item.id}></span>);

    //mapowanie elementów z json do karuzeli tworzenie diva dla każdego elementu.
    const slide = carousel.map(element => {
        return <div
            className='carousel-element'
            style={{background:`url(`+ require(`../../img/${element.img}`).default +`) no-repeat`,backgroundSize:"100% 100%",backgroundPosition:"top center"}}
            ref={elementRef}
            key={element.id}
            id={element.id}
        >
            <span className={element.spanClass}><p>{element.firstText}</p></span>
            <span className={element.spanClass}><p>{element.secondText}</p></span>
        </div>
    });

    // funkcja odpowiada z poruszanie karuzeli3
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
    
    const prevSlide =()=>{
        const value = currentValue;
        setCurrentValue(value - 1);
        if(currentValue === 0){
            setCurrentValue(slide.length -1);
        }
    };

    //scrollowanie po kliknięciu btn nawigacyjnego w karuzeli
    const scrollByBtn =(id)=>{
        setCurrentValue(id); 
        const slider = document.querySelector('.carousel-content');
        const element = document.querySelector('.carousel-element');
        slider.style.transform = `translateX(` +(-element.offsetWidth * id) + `px)`;
        slider.style.transition = '0.8s';
    };

    useEffect(()=>{
        if(signal === true){
            movingSlide();
        }
    },[currentValue]);

    //zmiana state signal true/false
    useEffect(()=>{
        setTimeout(()=>{
            setSignal(true);
        },4000)
    },[]);

    return ( 
        <>
            <div className='carousel'>
                {signal ? <div className='navBtnContent'>
                    {createNavBtn}
                </div> : null}
                <button onClick={nextSlide} className='nextBtn'></button>
                <button onClick={prevSlide} className='prevBtn'></button>
                <div className='carousel-content' ref={carouselRef}>
                    {props.render(slide)}
                </div>
                {/*<div className='carousel-tv'><p>KOSZULKA TV</p></div>*/}
            </div>
            <div className='carousel-content-stand'></div>
        </>
     );
}
 
export default CarouselFunctions;