import React from 'react';
import {useDispatch} from 'react-redux';


const BasketContent = (props) => {

    const {id,quantity,size,price,colorTshirt} = props;
    const dispatch = useDispatch();

    const removeElement =()=>{
        dispatch({type:'REMOVE_BASKET_ELEMENT',id:id})
    };
    
    return ( 
        <>
        <div className='basket-content'>
            <div className='content-element'>
                <div className='basket-tshirt' style={{background:colorTshirt}}></div>
            </div>
            <div className='content-element'>
                <span onClick={removeElement}><p className="delete-element">Usuń element</p><i className="fas fa-times"></i></span>
                <table>
                    <tbody>
                        <tr>
                            <td><p>Rozmiar:</p></td>
                            <td><p>{size}</p></td>
                        </tr>
                        <tr>
                            <td><p>Ilość:</p></td>
                            <td><p>{quantity}</p></td>
                        </tr>
                        <tr>
                            <td><p>Koszt:</p></td>
                            <td><p>{price}pln</p></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </>
     );
}
 
export default BasketContent;