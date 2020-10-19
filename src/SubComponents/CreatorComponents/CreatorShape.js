import React,{useState,useRef} from 'react';
import {useSelector} from 'react-redux';

const CreatorShape = (props) => {
    const {tshirt} = props;
    const activeColor = useSelector(state => state.tshirtReducer.activeColor);
    const tshirtPattern = useSelector(state => state.tshirtReducer.tshirtPattern);
    const tshirtRef = useRef(null);
    const patternRef = useRef(null);
    const [posY,setPosY] = useState(0);
    const [posYpattern,setPosYpattern] = useState(0);
    const [mouseDown,setMouseDown] = useState(false);

    const positionCursor =(event)=>{
        const offsetTop = tshirtRef.current.getBoundingClientRect().top;
        const offsetTopPattern = patternRef.current.getBoundingClientRect().top;
        const offsetBottom = tshirtRef.current.getBoundingClientRect().bottom;
        const offsetBottomPattern = patternRef.current.getBoundingClientRect().bottom;

        if(offsetTopPattern > offsetTop && offsetBottomPattern < offsetBottom){
            setPosY((event.clientY - offsetTop).toFixed()-posYpattern);
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

    const positionCursorPattern =(event)=>{
        setMouseDown(true); 
        const offsetTop = patternRef.current.getBoundingClientRect().top;
        const Y = event.clientY - offsetTop;
        setPosYpattern(Y.toFixed(0));
    }
    
    const takeMouseUp =()=>{
        setMouseDown(false); 
    };

    return ( 
        <>
            <div className='tshirt' style={{backgroundColor:activeColor}}>
                <div className='tshirt-content' onMouseMove={mouseDown === true ? positionCursor : null} ref={tshirtRef}>
                    <div onMouseDown={positionCursorPattern} onMouseUp={takeMouseUp} ref={patternRef} style={{position:'relative',top:`${posY}px`}} className='tshirt-content-element'><p>{tshirtPattern}</p>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default React.memo(CreatorShape);