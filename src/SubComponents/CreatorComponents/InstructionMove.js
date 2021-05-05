import React from 'react';
import {useDispatch} from 'react-redux';
import TshirtIntro from '../../img/tshirtIntro.png';

const InstructionMove = () => {

    const dispatch = useDispatch();

    const hideInstruction =()=>{
        dispatch({type:'HIDE_INSTRUCTION'});
    };

    return ( 
        <section className='instruction'>
            <div className='instruction-tshirt'>
                <img src={TshirtIntro} alt=''/>
            </div>
            <div className='instruction-tshirt-info'>
                <button onClick={hideInstruction}><i className="fa fa-times"></i></button>
                <p>Za pomocą myszki możesz kliknąć <br/> i przesunąć wzór na koszulce</p>
            </div>
        </section>
     );
}
 
export default InstructionMove;