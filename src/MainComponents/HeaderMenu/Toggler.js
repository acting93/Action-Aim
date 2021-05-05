import React from 'react';
import {useSelector} from 'react-redux';
import composedRenderPropsToggler from './RenderPropsToggler';

const Toggler = (props) => {
    const menuDropped = useSelector(state => state.mainReducer.isMenu);
    const isSticky = useSelector(state => state.mainReducer.isSticky);
    const {less768px,changeToggler} = props;

    const styleToggler ={
        position: 'relative',
        marginRight: '5%',
        top:'0',
    };

    return ( 
        <>
            <button className='toggler' onClick={changeToggler} style={less768px === true && isSticky === true ? styleToggler : null}>
                {menuDropped === false ?
                    <div className='toggler-hamburger'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div> 
                :
                    <div className='toggler-double'>
                        <span></span>
                        <span></span>
                    </div>  
                }
            </button>
        </>
     );
}
 
export default composedRenderPropsToggler(Toggler);