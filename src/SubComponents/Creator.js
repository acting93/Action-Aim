import React,{useState} from 'react';
import {useSelector} from 'react-redux';
import '../SCSS/Creator.scss';
import CreatorPattern from './CreatorComponents/CreatorPattern';
import CreatorShape from './CreatorComponents/CreatorShape';
import CreatorSettings from './CreatorComponents/CreatorSettings';
import composedHOCPatterns from './HomePageSub/FunctionsPatterns/HOCPatterns';
import Summary from './CreatorComponents/Summary';
import InstructionMove from './CreatorComponents/InstructionMove';
import AllSizes from './AllSizes';
import AllPatterns from './AllPatterns';

const Creator = (props) => {
    
    const summary = useSelector(state => state.tshirtReducer.summary);
    const basket = useSelector(state => state.mainReducer.isBasket);
    const tshirtInstruction = useSelector(state => state.tshirtReducer.tshirtInstruction);
    const sizeTable = useSelector(state => state.tshirtReducer.sizeTable);
    const allPatternsShow = useSelector(state => state.tshirtReducer.allPatternsShow);
    const allPatterns = useSelector(state => state.tshirtReducer.dataPattern);

    return ( 
        <>
            <section className='creator col-12'>
                <div className='creator-title'>
                    <p>Kreator koszulek</p>
                    <div className='creator-list'>
                        <ul>
                            <li onClick={()=>{props.sport();props.showMobilePattern()}}><p>SPORT</p></li>
                            <li onClick={()=>{props.travel();props.showMobilePattern()}}><p>TRAVEL</p></li>
                            <li onClick={()=>{props.motto();props.showMobilePattern()}}><p>MOTTO</p></li>
                            <li onClick={()=>{props.showAllPattern()}}><p>WSZYSTKIE</p></li>
                        </ul>
                    </div>
                </div>
                <div className='creator-content' style={allPatternsShow || summary || basket || tshirtInstruction || sizeTable ? {filter:'blur(10px)',pointerEvents:"none"} : null}>
                    <div className='creator-pattern col-12 col-lg-4 col-xl-3'>
                        <CreatorPattern />
                    </div>
                    <div className='creator-draw col-12 col-lg-8 col-xl-6'>
                        <CreatorShape />
                    </div>
                    <div className='creator-settings col-12 col-xl-3'>
                        <CreatorSettings />
                    </div>
                </div>
                {allPatternsShow ? <AllPatterns patterns={allPatterns}/> : null}
                {sizeTable ? <AllSizes /> : null}
                {summary ? <Summary /> : null}
                {tshirtInstruction ? <InstructionMove /> : null}
            </section>
        </>
     );
}
 
export default composedHOCPatterns(Creator);