import React from 'react';
import {useSelector} from 'react-redux';
import '../SCSS/Contact.css';
import {Col} from 'react-bootstrap';
import Form from './ContactSubComponents/Form';
import Logo from '../img/action.png'
import FormSent from './ContactSubComponents/FormSent';
import FormNotSent from './ContactSubComponents/FormNotSent';

const Contact = () => {
    //pobranie statusu wysłania formularza do klienta
    const formSendingStatus = useSelector(state => state.mainReducer.formSendingStatus);

    return ( 
        <>
            <Col xl={12} className='contact-header'>
                <p>Masz pytanie ?</p>
                <p>Pisz do nas śmiało !</p>
            </Col>
            <Col xl={12} className='contact-col-form'>
                <section className='contact'>
                    <div className='contact-title'>Formularz kontaktowy</div>
                    {formSendingStatus || formSendingStatus === false ? null : <Form />}
                    {formSendingStatus === true ? <FormSent /> : null}
                    {formSendingStatus === false ? <FormNotSent /> : null}
                </section>
            </Col>
            <Col xl={12} className='contact-col-info'>
                <div className='contact-info'>
                    <div className='contact-info-el'><img src={Logo} alt=''/></div>
                    <div className='contact-info-el'><i className="far fa-building"></i><p>ul. Aleja Grunwaldzka 250,<br/> 82-300 Elbląg</p></div>
                    <div className='contact-info-el'><i className="fas fa-mobile-alt"></i><p>Tel: 000 000 000</p></div>
                    <div className='contact-info-el'><i className="fas fa-envelope"></i><p>E-mail: actionaim@action.com</p></div>
                </div>
            </Col>
        </>
     );
}
 
export default Contact;