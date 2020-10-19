import React from 'react';
import '../SCSS/Creator.scss';
import CreatorPattern from './CreatorComponents/CreatorPattern';
import CreatorShape from './CreatorComponents/CreatorShape';
import composedHOCPatterns from './HomePageSub/FunctionsPatterns/HOCPatterns';

const Creator = (props) => {

    return ( 
        <>
            <section className='creator'>
                <div className='creator-title'><p>Kreator koszulek</p>
                    <div className='creator-list'>
                        <ul>
                            <li onClick={props.sport}>SPORT</li>
                            <li onClick={props.travel}>TRAVEL</li>
                            <li onClick={props.motto}>MOTTO</li>
                        </ul>
                    </div>
                </div>
                <article className='creator-content'>
                    <div className='creator-pattern'>
                        <div className='creator-pattern-title'><p>Paleta kolorów</p></div>
                        <div className='creator-pattern-content'>
                            <CreatorPattern />
                        </div>
                    </div>
                    <div className='creator-draw'>
                        <CreatorShape />
                    </div>
                </article>
            </section>
        </>
     );
}
 
export default composedHOCPatterns(Creator);