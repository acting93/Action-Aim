import React from 'react';
import '../SCSS/Footer.scss';
import Logo from '../img/action3.png';
import {NavLink} from 'react-router-dom';

const Footer = () => {
    return ( 
        <>
            <section className='footer'>
                <div className='footer-element-logo'>
                    <img src={Logo} alt=''/>
                </div>
                <div className='footer-element'>
                    <div className='footer-element-info'>
                        <p>Action-Aim</p>
                        <p>ul. Aleja Grunwaldzka X,<br/> 82-300 Elbląg</p>
                        <p>Tel: 000 000 000</p>
                        <p>E-mail: actionaim@action.testmail.com</p>
                    </div>
                    <div className='footer-element-info'>
                        <ul>
                            <li>Na skróty:</li>
                            <li><NavLink to="/">Strona Główna</NavLink></li>
                            <li><NavLink to="/creator">Kreator</NavLink></li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Footer;