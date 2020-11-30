import React from 'react';
import '../../SCSS/Contact.css';

const FormSent = () => {
    return ( 
        <>
            <section className='form-sent'> 
                <i className="fas fa-clipboard-check"></i>
                <p>Formularz wysłany.</p>
                <p>Dziękujemy za kontakt</p>
            </section>
        </>
     );
}
 
export default FormSent;