import React,{useState,useRef, useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';

const CreatorShape = (props) => {
    const dispatch = useDispatch();
    const activeColor = useSelector(state => state.tshirtReducer.activeColor);//pobieranie koloru koszulki po kliknięciu z listy kolorów
    const tshirtPattern = useSelector(state => state.tshirtReducer.tshirtPattern); // pobieranie wzoru koszuki po kliknięciu z listy wzorów
    const tshirtRef = useRef(null);
    const patternRef = useRef(null);
    const [posY,setPosY] = useState(0);
    const [posYpattern,setPosYpattern] = useState(0);
    const [mouseDown,setMouseDown] = useState(false);
    const [touchDown,setTouchDown] = useState(false);

//przeswanie  wzoru na koszulce góra,dół (kursor,touch)
    const positionCursor =(event)=>{

        const offsetTop = tshirtRef.current.getBoundingClientRect().top;
        const offsetTopPattern = patternRef.current.getBoundingClientRect().top;
        const offsetBottom = tshirtRef.current.getBoundingClientRect().bottom;
        const offsetBottomPattern = patternRef.current.getBoundingClientRect().bottom;

        if(offsetTopPattern > offsetTop && offsetBottomPattern < offsetBottom){
            setPosY(( event.clientY - offsetTop).toFixed(0)-posYpattern);
            setMouseDown(true);
        }
        if(offsetBottomPattern >= offsetBottom){
            setPosY(posY-5);
            setMouseDown(false);
        }
        if(offsetTopPattern <= offsetTop){
            setPosY(1);
            setMouseDown(false);
        }

    };

    const positionTouch =(event)=>{

        const offsetTop = tshirtRef.current.getBoundingClientRect().top;
        const offsetTopPattern = patternRef.current.getBoundingClientRect().top;
        const offsetBottom = tshirtRef.current.getBoundingClientRect().bottom;
        const offsetBottomPattern = patternRef.current.getBoundingClientRect().bottom;
        
        if(offsetTopPattern > offsetTop && offsetBottomPattern < offsetBottom){
            setPosY(( event.touches[0].clientY - offsetTop).toFixed(0)-posYpattern);
            setTouchDown(true);
        }
        if(offsetBottomPattern >= offsetBottom){
            setPosY(posY-5);
            setTouchDown(false);
        }
        if(offsetTopPattern <= offsetTop){
            setPosY(1);
            setTouchDown(false);
        }
    };

//ustalenie pozycji cursora na divie, który zawiera wzór, po kliknięciu lewym klawiszem myszy
    const positionCursorPattern =(event)=>{
        setMouseDown(true); 
        const offsetTop = patternRef.current.getBoundingClientRect().top;
        const clickY = event.clientY - offsetTop;
        setPosYpattern(clickY.toFixed(0));
    };

    const positionCursorPatternTouch =(event)=>{
        document.querySelector('body').style.overflow= 'hidden';//zmieniamy overflow onTouchDown stop scroll body przy przesuwaniu elementu
        setTouchDown(true); 
        const offsetTop = patternRef.current.getBoundingClientRect().top;
        const touchY = event.touches[0].clientY - offsetTop;
        setPosYpattern(touchY.toFixed(0));
    };

//opuszenie lewego klawisza myszy, zmiana stanu

    const takeMouseUp =()=>{
        setMouseDown(false); 
    };

    const takeTouchUp =()=>{
        document.querySelector('body').style.overflow= 'auto'; //zmieniamy overflow onTouchDown
        setTouchDown(false);
    };

    //przekazanie pozycji do state aby dodać do podsumowania zakupu
    useEffect(()=>{
        const percentPosiionPattern = ((posY * 100) / tshirtRef.current.offsetHeight);
        dispatch({type:'POSITION_PATTERN',positionPattern:percentPosiionPattern});
    },[posY]);

    //reset pozycji top po zmianie wzoru 
    useEffect(()=>{
        setPosY(0);
    },[tshirtPattern]);

    return ( 
        <>
            <div className='tshirt' style={{backgroundColor:activeColor}}>
                <div className='tshirt-content'
                    onTouchMove={touchDown === true ? positionTouch : null}
                    onMouseMove={mouseDown === true ? positionCursor : null}
                    ref={tshirtRef}
                    >
                    <div 
                        onMouseDown={positionCursorPattern}
                        onMouseUp={takeMouseUp}
                        onTouchStart={positionCursorPatternTouch}
                        onTouchEnd={takeTouchUp}
                        ref={patternRef}
                        style={{position:'relative',top:`${posY}px`}}
                        className='tshirt-content-element'
                    >
                        {tshirtPattern === null
                        ? <div id='no-pattern'><p>Wybierz wzór</p><i className="fa fa-close"></i></div>
                        : <img src={require(`../../img/${tshirtPattern}`).default} alt=''/> 
                        }
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default React.memo(CreatorShape);