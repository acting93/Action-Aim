import React from 'react';
import { Col } from 'react-bootstrap';
import '../SCSS/MainContent.css';
import {Switch,Route} from 'react-router-dom';
import HomePage from '../SubComponents/HomePage'
import Creator from '../SubComponents/Creator'
import AboutUs from '../SubComponents/AboutUs'
import Contact from '../SubComponents/Contact'

const MainContent = () => {
    return ( 
        <>
            <main>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/creator' component={Creator} />
                    <Route path='/aboutus' component={AboutUs} />
                    <Route path='/contact' component={Contact} />
                </Switch>
            </main> 
        </>
     );
}
 
export default MainContent;