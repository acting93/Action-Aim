import React from 'react';
import {NavLink} from 'react-router-dom'
import Toggler from './Toggler';
import composedRenderPropsToggler from './RenderPropsToggler';
import {useSelector,useDispatch} from 'react-redux';

const Menu = (props) => {
    
    const dispatch = useDispatch();
    const menu = useSelector(state => state.mainReducer.isMenu);
    const isSticky = useSelector(state => state.mainReducer.isSticky);
    const {widthPage} = props;

    const styleMenuSticky = {
        position:'absolute',
        width:'100vw',
        left:'-100%'
    };
    //funkcja, która chowa menu na urz. mobilnych pokliknięciu na element
    const hideMenuMobile =()=>{
        const widthScreen = window.innerWidth;
        if(widthScreen <= 768){
            dispatch({type:'MENU'});
        }else{
            return null
        }
        
    };

    return ( 
        <>
            <div className='menu'>
                <Toggler stickyMenu={props.stickyMenu} />
                {menu === true ?
                    <div className='menu-items' style={isSticky === true && widthPage === true ? styleMenuSticky : null}>
                        <NavLink to="/creator" onClick={hideMenuMobile}>KREATOR</NavLink>
                        <NavLink to="/aboutus" onClick={hideMenuMobile}>O NAS</NavLink>
                        <NavLink to="/contact" onClick={hideMenuMobile}>KONTAKT</NavLink>
                    </div>
                : null}
            </div>
        </>
     );
}
 
export default composedRenderPropsToggler(Menu);


