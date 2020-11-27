import React from 'react';
import '../SCSS/Creator.scss';
import CreatorPattern from './CreatorComponents/CreatorPattern';
import CreatorShape from './CreatorComponents/CreatorShape';
import CreatorSettings from './CreatorComponents/CreatorSettings';
import composedHOCPatterns from './HomePageSub/FunctionsPatterns/HOCPatterns';

const Creator = (props) => {
    
    return ( 
        <>
            <section className='creator col-12'>
                <div className='creator-title'><p>Kreator koszulek</p>
                    <div className='creator-list'>
                        <ul>
                            <li onClick={()=>{props.sport();props.showMobilePattern()}}>SPORT</li>
                            <li onClick={()=>{props.travel();props.showMobilePattern()}}>TRAVEL</li>
                            <li onClick={()=>{props.motto();props.showMobilePattern()}}>MOTTO</li>
                        </ul>
                    </div>
                </div>
                <div className='creator-content'>
                    <div className='creator-pattern col-12 col-lg-4 col-xl-3'>
                        <CreatorPattern />
                    </div>
                    <div className='creator-draw col-12 col-lg-8 col-xl-6'>
                        <CreatorShape />
                    </div>
                    <div className='creator-settings col-12 col-md-10 col-xl-3'>
                        <CreatorSettings />
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default composedHOCPatterns(Creator);