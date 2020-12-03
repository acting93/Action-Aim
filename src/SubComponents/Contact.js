import React from 'react';
import {useSelector} from 'react-redux';
import '../SCSS/Contact.css';
import {Col} from 'react-bootstrap';
import Form from './ContactSubComponents/Form';
import FormSent from './ContactSubComponents/FormSent';
import FormNotSent from './ContactSubComponents/FormNotSent';
import SpinnerForm from './ContactSubComponents/SpinnerForm';
import ContactInfo from './ContactSubComponents/ContactInfo';

const Contact = () => {
    //pobranie statusu wysłania formularza do klienta
    const formResponseStatus = useSelector(state => state.mainReducer.formResponseStatus);
    const formSpinner = useSelector(state => state.mainReducer.formSpinner);
    console.log(formResponseStatus)
    return ( 
        <>
            <Col xl={12} className='contact-header'>
                <p>Masz pytanie ?</p>
                <p>Pisz do nas śmiało !</p>
            </Col>
            <Col xl={12} className='contact-col-form'>
                <section className='contact' style={formSpinner || formResponseStatus || formResponseStatus === false ? {display:"none"}:null}>
                    <p className='contact-title'>Formularz kontaktowy</p>
                    <Form />
                </section>
                {formResponseStatus === true ? <FormSent /> : null}
                {formResponseStatus === false ? <FormNotSent /> : null}
                {formSpinner ? <SpinnerForm /> : null }
            </Col>
            <Col xl={12} className='contact-col-info'>
                <ContactInfo />
            </Col>
        </>
     );
}
 
export default Contact;