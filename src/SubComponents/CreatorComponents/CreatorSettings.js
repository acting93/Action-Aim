import React,{useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';

const CreatorSettings = (props) => {

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
                    <p>Kolor:</p>
                    <div className='choosenColor' style={{backgroundColor:choosenColor}}></div>
                </div>
                <div className='summary-element'>
                    <p>Rozmiar:</p>
                    <div className='choosenSize'><p>{pickedSize}</p></div>
                </div>
                <div className='summary-element'>
                    <p>Ilość sztuk:</p>
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
                    <p className='price'>{price},00 zł</p>
                </div>
            </div>
            <button className='buy' onClick={props.console}>Kup</button>
        </>
     );
}
 
export default CreatorSettings;