import React,{useEffect, useRef} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import '../SCSS/Header.css';
import Logo from '../img/action3.png';
import {Col} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import Menu from './HeaderMenu/Menu';

const Header = () => {
   
    const headerRef = useRef(null);
    const dispatch = useDispatch();
    const isSticky = useSelector(state => state.mainReducer.isSticky);

    const styleStickyHeader = {
        height:'80px',
        position:'fixed',
        zIndex:'300',
        background:'black',
        display:'flex',
        flexDirection:'row'
    };

    const headerSticky =()=>{
        const topWindow = window.pageYOffset;
        const heightHeader = headerRef.current.offsetHeight;

        heightHeader < topWindow  ? dispatch({type:'SPREAD_MENU',isSticky:true}) : dispatch({type:'SPREAD_MENU',isSticky:false});
    };

    useEffect(()=>{
        window.addEventListener('scroll',headerSticky);
    });

    return ( 
        <>
            <Col className='header-col' style={isSticky === true ? styleStickyHeader : null} ref={headerRef}>
                <div className='header-contents'>
                    <NavLink to='/'><img src={Logo} alt='' style={isSticky === true ? {width:'8rem'} : null} /></NavLink>
                </div>
                <div className='header-contents'>
                    <Menu />
                </div>
            </Col>
        </>
     );
}
 
export default Header;