import React from 'react';
import {useDispatch} from 'react-redux';

const InstructionMove = () => {

    const dispatch = useDispatch();

    const hideInstruction =()=>{
        dispatch({type:'HIDE_INSTRUCTION'});
    };

    return ( 
        <section className='instruction'>
            <div className='instruction-tshirt'>
                <i className="fas fa-arrows-alt-v"></i>
                <i className="fas fa-arrows-alt"></i>
            </div>
            <div className='instruction-tshirt-info'>
                <button onClick={hideInstruction}><i className="fas fa-times"></i></button>
                <p>Za pomocą myszki możesz kliknąć <br/> i przesunąć wzór na koszulce</p>
            </div>
        </section>
     );
}
 
export default InstructionMove;