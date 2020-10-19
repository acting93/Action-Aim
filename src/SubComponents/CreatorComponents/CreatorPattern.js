import React from 'react';
import {useSelector} from 'react-redux';
import CreatorPatternColors from './CreatorPatternColors';
import SizesAvailable from './SizesAvailable';
import TshirtPattern from './ThemesPatternFunctions/TshirtPattern';

const CreatorPattern = () => {
    const colors = useSelector(state => state.tshirtReducer.colors);
    const pattern = useSelector(state => state.tshirtReducer.activePattern);
    const isSize = useSelector(state => state.tshirtReducer.isSize);
    const mapColors = colors.map(color => <CreatorPatternColors id={color.id} key={color.id} color={color.color} sizes={color.sizes} />);
    const sizes = useSelector(state => state.tshirtReducer.activeSizePerColor);
    return ( 
        <>
            <div className='color-pattern'>
                {mapColors}
            </div>
            <div className='creator-pattern-sizes'>
                <p>Dostępne rozmiary:</p>
                {isSize === true ? <SizesAvailable sizes={sizes} /> : null}
            </div>
            <div className='theme-pattern'>
                <TshirtPattern pattern={pattern}/>
            </div>
        </>
     );
}
 
export default CreatorPattern;