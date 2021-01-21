import React from 'react';
import {useSelector} from 'react-redux';

const Summary = () => {

    //const quantity = useSelector(state => state.tshirtReducer.activeSizePerColor);
    const colorTshirt = useSelector(state => state.tshirtReducer.activeColor);
    const size = useSelector(state => state.tshirtReducer.choosenSize);

    return ( 
        <>
            <section className='summary col-xl-8 col-lg-10 col-12'>
                <div className='summary-title'><p>Podsumowanie</p></div>
                <div className='summary-content'>
                    <div className='summary-content-element'>

                    </div>
                    <div className='summary-content-element'>
                        <div className='element-info'>
                            <p>Kolor koszulki:</p>
                            <div className='summary-color' style={{backgroundColor:colorTshirt}}></div>
                        </div>
                        <div className='element-info'>
                            <p>Rozmiar:</p>
                            <div className='summary-size'>{size}</div>
                        </div>
                        <div className='element-info'>
                            <p>Ilość:</p>
                            <div className='summary-quantity'>1</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Summary;
