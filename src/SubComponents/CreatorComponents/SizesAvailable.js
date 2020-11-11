import React from 'react';

const SizesAvailable = (props) => {
    const {sizes} = props;
    const mapSizes = sizes.map(element => element.sizes);
    const singleSize = mapSizes[0];//pierwszy element tablicy w tablicy
    const mapSingleSize = singleSize.map(size => <li key={size.id}><p style={size.active === false ? {color:'red'} : null}>{size.size}</p></li>);
    return ( 
        <>
            <ul>
                {mapSingleSize}
            </ul>
        </>
     );
}
 
export default SizesAvailable;