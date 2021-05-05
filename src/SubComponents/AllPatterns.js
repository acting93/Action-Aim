import React from 'react';
import {useDispatch} from 'react-redux';


const AllPatterns = (props) => {
    
    const {patterns} = props;
    const dispatch = useDispatch();

    const allPatternsMap = patterns.map(item => <div className='all-patterns-element' onClick={(image)=>{setPattern(item.img)}} key={item.key}>
        <img src={require(`../img/${item.img}`)} alt=''/>
    </div>);

    const hideAllPatterns =()=>{
        dispatch({type:'SHOW_ALL_PATTERNS',isShow:false});
    };

    const setPattern =(image)=>{
        dispatch({type:'GET_TSHIRT_PATTERN',getPattern:image})
        hideAllPatterns();
    };

    return (
        <> 
            <section className='all-patterns col-12 col-xl-10'>
                <button onClick={hideAllPatterns}>Zamknij podgląd</button>
                <div className='all-patterns-content'>
                    {allPatternsMap}
                </div>
            </section>
        </>
    );
};
 
export default AllPatterns;