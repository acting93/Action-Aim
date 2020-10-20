import React from 'react';
import '../SCSS/Contact.css';
import {Col} from 'react-bootstrap';
import Form from './ContactSubComponents/Form';

const Contact = () => {
    return ( 
        <>
            <Col xl={10} className='contact-col'>
                <section className='contact'>
                    <div className='contact-title'>Formularz kontaktowy</div>
                    <Form />
                </section>
            </Col>
        </>
     );
}
 
export default Contact;