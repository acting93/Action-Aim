import React,{useEffect, useMemo, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CreatorPatternColors from './CreatorPatternColors';
import SizesAvailable from './SizesAvailable';
import TshirtPattern from './ThemesPatternFunctions/TshirtPattern';

const CreatorPattern = () => {
    const colors = useSelector(state => state.tshirtReducer.colors);//pobranie kolorów ze state redux
    const pattern = useSelector(state => state.tshirtReducer.activePattern);//pobranie wzorów koszulek ze state redux
    const isSize = useSelector(state => state.tshirtReducer.isSize); //pobieram stan boolean do aktywnych rozmiarów przy wyborze koloru
    const mapColors = colors.map(color => <CreatorPatternColors id={color.id} key={color.id} color={color.color} active={color.active} sizes={color.sizes} />);//mapowanie listy kolorów => utworzenie nowgo komponentu kolorów
    const sizes = useSelector(state => state.tshirtReducer.activeSizePerColor);//pobranie aktywnych rozmiarów danego koloru przy kliknięciu na kolor
    const [showPattern,setShowPattern] = useState(true);
    const dispatch = useDispatch();   
    
    //auto pojawianie się TshirtPattern
    const windowWidth =()=>{
        const widthScreen = window.innerWidth;

        if(widthScreen > 768){
            setShowPattern(true);
        };
    };

    useEffect(()=>{
        window.addEventListener('resize',windowWidth);
        return ()=> {window.removeEventListener('resize',windowWidth);}
    },[]);

    const showHide =()=>{
        setShowPattern(!showPattern);
    };

    const showSizeTable =()=>{
        dispatch({type:'SIZES_TABLE',show:true});
    };

    return ( 
        <>
            <div className='color-pattern'>
                <div className='color-title'>
                    <p>Paleta kolorów</p>
                </div>
                <div className='color-elements'>
                    {mapColors}
                </div>
            </div>
            <div className='creator-pattern-sizes'>
                <p>Dostępne rozmiary:</p>
                {isSize === true ? <SizesAvailable sizes={sizes} /> : null}
                <div id='all-sizes-btn'><button onClick={showSizeTable}>Tablica wzorów</button></div>
            </div>
            <div className='theme-pattern-button'>
                <button onClick={showHide}>{showPattern === true ? 'ukryj wzory' : 'pokaż wzory'}</button>
            </div>
            <TshirtPattern pattern={pattern} show={showPattern}/>
        </>
     );
}
 
export default React.memo(CreatorPattern);