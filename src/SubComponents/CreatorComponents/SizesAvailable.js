import React from 'react';
import { useDispatch } from 'react-redux';

const SizesAvailable = (props) => {

    const dispatch = useDispatch();
    const {sizes} = props;
    const mapSizes = sizes.map(element => element.sizes);
    const singleSize = mapSizes[0];//pierwszy element tablicy w tablicy

    //przekazanie do reducera id w celu filtrowania i wybrania koloru przez klienta 
    const pickColor =(id)=>{
        dispatch({type:'CHOOSEN_SIZE',id:id})
    };
    //mapowanie rozmiarów per wybrany kolor
    const mapSingleSize = singleSize.map(size =>
        <li key={size.id} id={size.id} onClick={size.active ? ()=> pickColor(size.id) : null } style={size.active ? null : {pointerEvents:'none'}}>
            <p style={size.active === false ? {color:'red'} : {color:'white'} }>{size.size}</p>
        </li>);

    return ( 
        <>
            <ul>
                {mapSingleSize}
            </ul>
        </>
     );
};
 
export default SizesAvailable;