import React from 'react';
import TshirtPatternElement from './TshirtPatternElement';

const TshirtPattern = (props) => {
    const {pattern} = props;
    const mapPatterns = pattern.map(element => <TshirtPatternElement id={element.id} key={element.id} name={element.name}/>)
    return ( 
        <>
            {mapPatterns}
        </>
     );
}
 
export default TshirtPattern;