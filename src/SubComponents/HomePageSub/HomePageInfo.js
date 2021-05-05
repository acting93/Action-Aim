import React from 'react';
import { Col } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import African from '../../img/AFRICAN.png';
import Eagle from '../../img/eagle.png';
import Cross from '../../img/cross.png';
import Flower from '../../img/flower.png';
import Sett from '../../img/sett.png';
import Basket from '../../img/basket.png';

const HomePageInfo = () => {
    return ( 
        <>
            <Col lg={12} className='homePageInfo-col'>
                <section className='homePageInfo'>
                    <div className='homePage-title col-12'>
                        <p>Koszulki</p>
                    </div>
                    <article className='homePage-article-prize col-12'>
                        <div className='article-prize-el'>
                            <img src={African} alt=''/>
                            <div className='element-descript'>
                                <p>Afryka</p>
                                <p>Skład: bawełna</p>
                                <p>30,00 zł</p>
                            </div>
                        </div>
                        <div className='article-prize-el'>
                            <img src={Eagle} alt=''/>
                            <div className='element-descript'>
                            <p>Angry Eagle</p>
                            <p>Skład: bawełna</p>
                            <p>18,00 zł</p>
                            </div>
                        </div>
                        <div className='article-prize-el'>
                            <img src={Cross} alt=''/>
                            <div className='element-descript'>
                                <p>Krzyż Południa</p>
                                <p>Skład: bawełna</p>
                                <p>25,00 zł</p>
                            </div>
                        </div>
                    </article>
                    <article className='homePage-article col-12'>
                        <div className='article-part'>
                            <p>Zapraszamy</p>
                            <p>do skorzystania z naszego kreatora koszulek.<br/> Do wyboru ferujemy kilkadziesiąt wzorów do wyboru,
                                Naszym głównym celem jest zadowolenie klienta czyli Ciebie.
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
                                <img src={Flower} alt=''/>
                                <p>Pomysł</p>
                                <p className='description'>Dobierz własny wzór z naszych propozycji.</p>
                            </div>   
                            <div className='homePage-article-2-icon'>
                                <img src={Sett} alt=''/>
                                <p>Wdrożenie</p>
                                <p className='description'>Kreacja zajmie Ci kilka minut, a może nawet i sekund.</p>
                            </div>   
                            <div className='homePage-article-2-icon'>
                                <img src={Basket} alt=''/>
                                <p>Gotowe</p>
                                <p className='description'>Koszulka Twojego własnego autorstwa jest gotowa.</p>
                            </div>   
                        </div>
                    </article>
                    <article className='homePage-article-3'>
                        <div className='homePage-article-3-content'>
                            <div className='homePage-article-3-title'><p>Kategorie wzorów</p></div>
                            <div className='category-content'>
                                <div className='category'><p>MOTTO</p></div>
                                <div className='category'><p>SPORT</p></div>
                                <div className='category'><p>TRAVEL</p></div>
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