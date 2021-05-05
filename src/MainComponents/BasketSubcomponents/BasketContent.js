import React from 'react';
import {useDispatch} from 'react-redux';


const BasketContent = (props) => {

    const {id,quantity,size,price,colorTshirt,pattern,position} = props;
    const dispatch = useDispatch();
    
    const removeElement =()=>{
        dispatch({type:'REMOVE_BASKET_ELEMENT',id:id});
        dispatch({type:'DELETE_ELEMENT_PRICE',price:price});
    };
    
    return ( 
        <>
            <div className='basket-content'>
                <div className='content-element'>
                    <div className='basket-tshirt' style={{backgroundColor:colorTshirt,border:`1px solid ${colorTshirt}`}}>
                        <div className='basket-tshirt-pattern'>
                            <div className='basket-pattern' >
                                <img src={require(`../../img/${pattern}`).default} alt='' style={{top:`${position}%`}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='content-element'>
                    <span onClick={removeElement}><p className="delete-element">Usuń element</p><i className="fa fa-close"></i></span>
                    <table>
                        <tbody>
                            <tr>
                                <td>Rozmiar:</td>
                                <td>{size}</td>
                            </tr>
                            <tr>
                                <td>Ilość:</td>
                                <td>{quantity}</td>
                            </tr>
                            <tr>
                                <td>Koszt:</td>
                                <td>{price} PLN</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
     );
}
 
export default BasketContent;