import React from 'react';
import {useDispatch} from 'react-redux';


const CreatorPatternColors = (props) => {

    const{id,color,active} = props;
    const dispatch = useDispatch();

    const changeColor =()=>{//zmiana koloru koszulki, filtorwanie w reducer
        dispatch({type:'GET_COLOR',getColor:color,id:id});
    };

    const setSizes =()=>{
        dispatch({type:'GET_SIZE_COLOR',color:color});//przekazanie koloru do filtrowania w reducer aby prypsiac odpowiednią listę rozmiarów
    };

    const style = {
        background:color,
        transform:active === true ? "skewX(-20deg)" : "none"
    };

    return ( 
        <>
            <div onClick={()=>{changeColor();setSizes()}} className='color-pattern-element' style={style}></div>
        </>
     );
}
 
export default CreatorPatternColors;
