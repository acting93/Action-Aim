import React,{useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import Logo from '../../img/action3.png';

const Summary = () => {

    const dispatch = useDispatch();
    const quantity = useSelector(state => state.tshirtReducer.quantity);
    const colorTshirt = useSelector(state => state.tshirtReducer.activeColor);
    const size = useSelector(state => state.tshirtReducer.choosenSize);
    const pattern = useSelector(state => state.tshirtReducer.tshirtPattern);
    const topPositionPattern = useSelector(state => state.tshirtReducer.topPositionPattern);
    const price = useSelector(state => state.tshirtReducer.priceTshirt);
    const idBasketElement = useSelector(state => state.mainReducer.idBasketElement);

    const showSummary =()=>{
        dispatch({type:'SHOW_HIDE_SUMMARY',summary:false});
    };


    const putBasket =()=>{

        const arrayBasket = [{
            'id': idBasketElement,
            'quantity':quantity,
            'colorTshirt':colorTshirt,
            'size':size,
            'price':price,
            'position': topPositionPattern,
            'pattern': pattern
        }];
        dispatch({type:'PUT_BASKET',basketContent:arrayBasket});
        dispatch({type:'TOTAL_BASKET',total:price});
        dispatch({type:'ADD_ID_BASKET_ELEMENT'});
    };

    return ( 
        <>
            <section className='summary col-xl-8 col-12'>
                <div className='summary-title'><p>Podsumowanie</p></div>
                <div className='summary-content'>
                    <div className='summary-content-element'>
                        <div className='tshirt-summary' style={{backgroundColor:colorTshirt}}>
                            <div className='tshirt-summary-pattern' >
                                <img src={(require(`../../img/${pattern}`)).default} style={{top:`${topPositionPattern}%`}} alt=''/>
                            </div>
                        </div>
                    </div>
                    <div className='summary-content-element'>
                        <div className='summary-logo'><img src={Logo} alt=''/></div>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Rozmiar</td>
                                    <td>{size}</td>
                                </tr>
                                <tr>
                                    <td>Ilość</td>
                                    <td>{quantity}</td>
                                </tr>
                                <tr>
                                    <td>Kolor</td>
                                    <td><div id='summary-color' style={{background:colorTshirt}}></div></td>
                                </tr>
                                <tr>
                                    <td>Suma</td>
                                    <td>{price},00 pln</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className='summary-buttons'>
                            <button onClick={()=>{showSummary();putBasket()}}>Dodaj do koszyka</button>
                            <button onClick={showSummary}>Anuluj</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Summary;
