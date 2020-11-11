import React from 'react';
import TshirtPatternElement from './TshirtPatternElement';

const TshirtPattern = (props) => {
    const {pattern,show} = props;
    const mapPatterns = pattern.map(element => <TshirtPatternElement id={element.id} key={element.id} name={element.name} image={element.img}/>)
    return ( 
        <>
            <div className='theme-pattern' style={show === true ? {display:"block"} : {display:"none"}}>
                {mapPatterns}
            </div>
        </>
     );
}
 
export default TshirtPattern;