import React from 'react';
import {useDispatch} from 'react-redux';


const TshirtPatternElement = props => {

    const {name} = props;

    const dispatch = useDispatch();

    const setPattern =()=>{
        dispatch({type:'GET_TSHIRT_PATTERN',getPattern:name})
    }

    return ( 
        <>  
            <div className='theme-pattern-element' onClick={setPattern}>{name}</div>
        </>
     );
}
 
export default TshirtPatternElement;

