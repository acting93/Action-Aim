import React from 'react';
import {useDispatch} from 'react-redux';
 
const TshirtPatternElement = props => {

    const {image} = props;
    const dispatch = useDispatch();

    const setPattern =()=>{
        dispatch({type:'GET_TSHIRT_PATTERN',getPattern:image});
    };

    return ( 
        <>  
            <div className='theme-pattern-element' onClick={setPattern}>
                <img src={require(`../../../img/${image}`).default} alt=''/>
            </div>
        </>
     );
}
 
export default TshirtPatternElement;

