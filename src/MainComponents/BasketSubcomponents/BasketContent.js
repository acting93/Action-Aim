import React from 'react';
import {useDispatch} from 'react-redux';
import Tshirt from '../../img/tshirt.png';


const BasketContent = (props) => {

    const {id,quantity,size,price,colorTshirt,pattern,position} = props;
    const dispatch = useDispatch();

    const removeElement =()=>{
        dispatch({type:'REMOVE_BASKET_ELEMENT',id:id});
    };
    
    return ( 
        <>
        <div className='basket-content'>
            <div className='content-element'>
                <div className='basket-tshirt' style={{backgroundColor:colorTshirt,border:`1px solid ${colorTshirt}`}}>
                    <div className='basket-tshirt-pattern'>
                        <div className='basket-pattern' >
                            <img src={require(`../../img/${pattern}`)} alt='' style={{top:`${position}%`}}/>
                        </div>
                    </div>
                </div>
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
                            <td><p>{price} PLN</p></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </>
     );
}
 
export default BasketContent;