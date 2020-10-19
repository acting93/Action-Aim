import React from 'react';
import {NavLink} from 'react-router-dom'
import Toggler from './Toggler';
import composedRenderPropsToggler from './RenderPropsToggler';
import {useSelector} from 'react-redux';

const Menu = (props) => {
    
    const menu = useSelector(state => state.mainReducer.isMenu);
    const isSticky = useSelector(state => state.mainReducer.isSticky);
    const {widthPage} = props;

    const styleMenuSticky = {
        position:'absolute',
        width:'100vw',
        left:'-100%'
    }


    return ( 
        <>
            <div className='menu'>
                <Toggler stickyMenu={props.stickyMenu} />
                {menu === true ?
                    <div className='menu-items' style={isSticky === true && widthPage === true ? styleMenuSticky : null}>
                        <NavLink to="/creator">KREATOR</NavLink>
                        <NavLink to="/aboutus">O NAS</NavLink>
                        <NavLink to="/contact">KONTAKT</NavLink>
                    </div>
                : null}
            </div>
        </>
     );
}
 
export default composedRenderPropsToggler(Menu);


