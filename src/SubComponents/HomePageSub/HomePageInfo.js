import React from 'react';
import { Col } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import African from '../../img/AFRICAN.png';
import Eagle from '../../img/eagle.png';
import Cross from '../../img/cross.png';

const HomePageInfo = () => {
    return ( 
        <>
            <Col lg={12} className='homePageInfo-col'>
                <section className='homePageInfo'>
                    <div className='homePage-title col-12'>
                        <p>Witamy w krainie kreacji koszulek</p>
                    </div>
                    <article className='homePage-article-prize col-12'>
                        <div className='article-prize-el'>
                            <img src={African} alt=''/>
                            <div className='element-descript'>
                                <p>Afryka - 15 pln</p>
                            </div>
                        </div>
                        <div className='article-prize-el'>
                            <img src={Eagle} alt=''/>
                            <div className='element-descript'>
                            <p>Angry Eagle - 15 pln</p>
                            </div>
                        </div>
                        <div className='article-prize-el'>
                            <img src={Cross} alt=''/>
                            <div className='element-descript'>
                                <p>Krzyż Południa - 15zł</p>
                            </div>
                        </div>
                    </article>
                    <article className='homePage-article col-12'>
                        <div className='article-part'>
                            <p id='zapraszamy'>Zapraszamy</p><br/><p>do skorzystania z naszego kreatora koszulek.<br/> Do wyboru ferujemy kilkadziesiąt wzorów do wyboru,
                                Naszym głównym celem jest zadowolenie klienta czyli Ciebie
                            </p>
                        </div>
                        <div className='article-part'>
                            <p>It's time to: </p>
                            <p>MY OWN PATTERN </p>
                        </div>
                    </article>
                    <article className='homePage-article-2'>
                        <div className='homePage-title-article-2'>
                            <p>Sprawdź jakie to proste !</p>
                        </div>
                        <div className='homePage-article-2-part'>
                            <div className='homePage-article-2-icon'>
                                <p>Pomysł</p>
                                <p className='description'>Dobierz własny wzór z naszych propozycji.</p>
                            </div>   
                            <div className='homePage-article-2-icon'>
                                <p>Wdrożenie</p>
                                <p className='description'>Kreacja zajmie Ci kilka minut, a może nawet i sekund.</p>
                            </div>   
                            <div className='homePage-article-2-icon'>
                                <p>Gotowe</p>
                                <p className='description'>Koszulka Twojego własnego autorstwa jest gotowa.</p>
                            </div>   
                        </div>
                    </article>
                    <article className='homePage-article-3'>
                        <div className='homePage-article-3-title'><p>Kategorie wzorów</p></div>
                        <div className='category'><p>MOTTO</p></div>
                        <div className='category'><p>SPORT</p></div>
                        <div className='category'><p>TRAVEL</p></div>
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