import React,{useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';

const CreatorSettings = () => {

    const choosenColor = useSelector(state => state.tshirtReducer.activeColor);
    const pickedSize = useSelector(state => state.tshirtReducer.choosenSize);
    const tshirtPattern = useSelector(state => state.tshirtReducer.tshirtPattern);
    const dispatch = useDispatch();
    const [piece, setPiece] = useState(1);
    const [price, setPrice] = useState(15);


    //wyczyść wzór 
    const clearPattern =()=>{
        dispatch({type:'GET_TSHIRT_PATTERN',getPattern:null});
    };

    //reset wzoru,ilości sztuk
    const resetAll =()=>{
        dispatch({type:'RESET_ALL'});
    };

    //ilosć sztuk
    const handlePiece =(e)=>{
        const value =  e.target.value;
        if(value < 0 || value > 10){
            setPiece(1);
        }else{
            setPiece(value);
            setPrice(value*15);
        }
    };

    //pokaż/ukryś podsumowanie
    const showSummary =()=>{
        dispatch({type:'SHOW_HIDE_SUMMARY',summary:true});
        dispatch({type:'QUANTITY_PRICE',quantity:piece,price:price});
    };

    return ( 
        <>
            <p>Ustawienia</p>
            <div className='creator-sett-content'>
                <button onClick={clearPattern}><i className="fa fa-trash-o"></i>Usuń wzór</button>
                <button onClick={resetAll}><i className="fa fa-refresh"></i>Reset</button>
            </div>
            <p className='summary-title'>Podsumowanie</p>
            <div className='creator-summary'>
                <div className='summary-element'>
                    <div className='element-title'><p>Kolor:</p></div>
                    <div className='element-content'><div id='picked-color' style={{backgroundColor:choosenColor}}></div></div>
                </div>
                <div className='summary-element'>
                    <div className='element-title'><p>Rozmiar:</p></div>
                    <div className='element-content'><div id='picked-size'><p>{pickedSize}</p></div></div>
                </div>
                <div className='summary-element'>
                    <div className='element-title'><p>Ilość sztuk:</p></div>
                    <div className='element-content'>
                        <input
                            onChange={handlePiece}
                            type='number'
                            name='pieces'
                            value={piece}
                            min="1"
                            max="10"
                        />
                    </div>
                </div>
                <div className='summary-element'>
                    <div className='element-title'><p>Suma:</p></div>
                    <div className='element-content'><p id='price'>{price},00 pln</p></div>
                </div>
            </div>
            <button className='buy' style={piece < 1 || !tshirtPattern ? {pointerEvents:'none',opacity:'0.2'} : null} onClick={showSummary}>Dodaj do koszyka</button>
        </>
     );
}
 
export default CreatorSettings;