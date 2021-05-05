import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BasketContent from './BasketSubcomponents/BasketContent';

const Basket = () => {

    const dispatch = useDispatch();
    const basketContent = useSelector(state => state.mainReducer.basketContent);
    const total = useSelector(state => state.mainReducer.total);
    
    const basketContentMap = basketContent.map(item =>
        <BasketContent key={item.id} id={item.id} quantity={item.quantity} price={item.price} colorTshirt={item.colorTshirt} position={item.position} size={item.size} pattern={item.pattern}
    />);
    
    const hideBasket =()=>{
        dispatch({type:'SHOW_BASKET',isBasket:false});
    };

    const resetBasketContent =()=>{
        dispatch({type:'RESET_BASKET'});
        dispatch({type:'RESET_TOTAL_BASKET'});
    };

    const styleBasket = {
        overflowY:'scroll',
        whiteSpace:'nowrap',
        height:'600px'
    };

    return ( 
        <>
            <section className='basket' style={basketContent.length > 2 ? styleBasket : {height:'auto'}}>
                <div className='basket-title'><p>Twój koszyk</p><p className='total'>Suma: {total} PLN</p></div>
                {basketContent.length > 0
                 ?
                    basketContentMap
                 :
                    <div className='empty-basket'><p>Koszyk jest pusty</p></div>
                } 
                <div className='basket-button'>
                    {basketContent.length > 0 ? <button>Przejdź do płatności</button> : null}
                    <button onClick={hideBasket}>Zamknij</button>
                    {basketContent.length > 0 ? <button onClick={resetBasketContent} className='exit-basket'>Wyczyśc koszyk</button> : null}
                </div>
            </section>
        </>
     );
}
 
export default Basket;