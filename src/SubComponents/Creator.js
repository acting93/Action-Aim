import React,{useEffect,useCallback,useState} from 'react';
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
                            <li onClick={()=>{props.sport();props.showMobilePattern()}}>SPORT</li>
                            <li onClick={()=>{props.travel();props.showMobilePattern()}}>TRAVEL</li>
                            <li onClick={()=>{props.motto();props.showMobilePattern()}}>MOTTO</li>
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