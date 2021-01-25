import React,{useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';

const CreatorSettings = () => {

    const choosenColor = useSelector(state => state.tshirtReducer.activeColor);
    const pickedSize = useSelector(state => state.tshirtReducer.choosenSize);
    const dispatch = useDispatch();
    const [piece, setPiece] = useState(1);
    const [price, setPrice] = useState(15);
    
    const clearPattern =()=>{
        dispatch({type:'GET_TSHIRT_PATTERN',getPattern:null});
    };

    const resetAll =()=>{
        dispatch({type:'RESET_ALL'});
    };

    const handlePiece =(e)=>{
        const value =  e.target.value;
        setPiece(value);
        setPrice(value*15);
    };

    const showSummary =()=>{
        dispatch({type:'SHOW_HIDE_SUMMARY',summary:true});
        dispatch({type:'QUANTITY_PRICE',quantity:piece,price:price});
    };

    return ( 
        <>
            <p>Ustawienia</p>
            <div className='creator-sett-content'>
                <button><i className="fas fa-save"></i>Zapisz</button>
                <button onClick={clearPattern}><i className="fas fa-trash-alt"></i>Usuń</button>
                <button onClick={resetAll}><i className="fas fa-broom"></i>Reset</button>
            </div>
            <p className='summary-title'>Podsumowanie</p>
            <div className='creator-summary'>
                <div className='summary-element'>
                    <div className='element-title'><p>Kolor:</p></div>
                    <div className='choosenColor' style={{backgroundColor:choosenColor}}></div>
                </div>
                <div className='summary-element'>
                    <div className='element-title'><p>Rozmiar:</p></div>
                    <div className='choosenSize'><span>{pickedSize}</span></div>
                </div>
                <div className='summary-element'>
                    <div className='element-title'><p>Ilość sztuk:</p></div>
                    <input
                        onChange={handlePiece}
                        type='number'
                        name='pieces'
                        value={piece}
                        min={0}
                        max={10}
                    />
                </div>
                <div className='summary-element'>
                    <p>Suma:</p>
                    <p className='price'>{price},00 pln</p>
                </div>
            </div>
            <button className='buy' onClick={showSummary}>Dodaj do koszyka</button>
        </>
     );
}
 
export default CreatorSettings;