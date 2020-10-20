import React from 'react';
import '../SCSS/Contact.css';
import {Col} from 'react-bootstrap';
import Form from './ContactSubComponents/Form';
import Logo from '../img/action.png'

const Contact = () => {
    return ( 
        <>
            <Col xl={12} className='contact-header'>
                <p>Masz pytanie ?</p>
                <p>Pisz do nas śmiało !</p>
            </Col>
            <Col xl={10} className='contact-col'>
                <section className='contact'>
                    <div className='contact-title'>Formularz kontaktowy</div>
                    <Form />
                </section>
                <section className='contact'>
                    <div className='contact-logo'><img src={Logo} alt=''/></div>
                    <div className='contact-info'>
                        <p>Action-Aim</p>
                        <p>ul. Aleja Grunwaldzka 250 82-300 Elbląg</p>
                        <p>Tel: 000 000 000</p>
                        <p>E-mail: actionaim@action.com</p>
                    </div>
                </section>
            </Col>
        </>
     );
}
 
export default Contact;