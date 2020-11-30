import React from 'react';
import '../../SCSS/Contact.css';

const FormNotSent = () => {
    return (  
        <>
            <section className='form-not-sent'> 
                <i className="far fa-times-circle"></i>
                <p>Formularz niewysłany.</p>
                <p>Prosimy o kontakt telefoniczny lub mailowy.</p>
            </section>
        </>
    );
}
 
export default FormNotSent;
