import React from 'react';
import {useDispatch} from 'react-redux';


const CreatorPatternColors = (props) => {

    const{id,color} = props;
    const dispatch = useDispatch();

    const changeColor =()=>{
        dispatch({type:'GET_COLOR',getColor:color,id:id});
    };

    const setSizes =()=>{
        dispatch({type:'GET_SIZE_COLOR',color:color})
    }

    return ( 
        <>
            <div onClick={()=>{changeColor();setSizes()}} className='color-pattern-element' style={{background:color}}></div>
        </>
     );
}
 
export default CreatorPatternColors;
