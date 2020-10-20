import React from 'react';
import { Col } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const HomePageInfo = () => {
    return ( 
        <>
            <Col lg={12} className='homePageInfo-col'>
                <section className='homePageInfo'>
                    <div className='homePage-title'>
                        <p>Witamy w krainie kreacji koszulek</p>
                    </div>
                    <article className='homePage-article col-lg-10'>
                        <div className='article-part'>
                            <p>Zapraszamy do skorzystania z naszego kreatora koszulek. Do wyboru ferujemy kilkadziesiąt wzorów do wyboru,
                                Naszym głównym celem jest zadowolenie klienta czyli Ciebie
                            </p>
                        </div>
                        <div className='article-part'>
                            <p>It's time to: </p>
                            <p>MY OWN PATTERN </p>
                        </div>
                    </article>
                    <article className='homePage-article-2'>
                        <div className='homePage-title'>
                            <p>Sprawdź jakie to proste !</p>
                        </div>
                        <div className='homePage-article-2-part'>
                            <div className='homePage-article-2-icon'>
                                <i className="fa fa-lightbulb-o"></i>
                                <p>Pomysł</p>
                                <p className='description'>Dobierz własny wzór z naszych propozycji.</p>
                            </div>   
                            <div className='homePage-article-2-icon'>
                                <i className='fas fa-palette'></i>
                                <p>Wdrożenie</p>
                                <p className='description'>Kreacja zajmie Ci kilka minut, a może nawet i sekund.</p>
                            </div>   
                            <div className='homePage-article-2-icon'>
                                <i className='fas fa-tshirt'></i>
                                <p>Gotowe</p>
                                <p className='description'>Koszulka Twojego własnego autorstwa jest gotowa.</p>
                            </div>   
                        </div>
                    </article>
                    <article className='homePage-redirect'>
                        <NavLink to='/creator'><button>Przejdź do kreatora</button></NavLink>
                    </article>
                </section>
            </Col>
        </>
     );
}
 
export default HomePageInfo;