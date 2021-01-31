import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BasketContent from './BasketSubcomponents/BasketContent';

const Basket = () => {

    const dispatch = useDispatch();
    const basketContent = useSelector(state => state.mainReducer.basketContent);

    const basketContentMap = basketContent.map(item => <BasketContent key={item.id} id={item.id} quantity={item.quantity} price={item.price} colorTshirt={item.colorTshirt} size={item.size}/>)
    const hideBasket =()=>{
        dispatch({type:'SHOW_BASKET',isBasket:false});
    };

    const resetBasketContent =()=>{
        dispatch({type:'RESET_BASKET'});
    };

    return ( 
        <>
            <section className='basket'>
                <div className='basket-title'><p>Twój koszyk</p></div>
                {basketContent.length > 0
                 ?
                 basketContentMap
                 :
                 <div className='empty-basket'><p>Koszyk jest pusty</p></div>
                 } 
                <div className='basket-button'>
                    <button>Przejdź do płatności</button>
                    <button onClick={hideBasket}>Zamknij</button>
                    <button onClick={resetBasketContent} className='exit-basket'>Wyczyśc koszyk</button>
                </div>
            </section>
        </>
     );
}
 
export default Basket;