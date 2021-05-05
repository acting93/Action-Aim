import React from 'react';
import {Spinner} from 'react-bootstrap';

const SpinnerForm = () => {
    return ( 
        <>
        <div className='spinnerContent'>
            <p className='spinnerTitle'>Wysyłanie, proszę czekać...</p>
            <Spinner 
                as="span"
                animation="border"
                size="xl"
                role="status"
                aria-hidden="true"
                className='spinnerForm'
            />
        </div>
        </>
     );
}
 
export default SpinnerForm;