import React from 'react';

const AllPatterns = (props) => {
    
    const {patterns} = props;

    const allPatternsMap = patterns.map(item => <div className='all-patterns-element' key={item.key}>
        <img src={require(`../img/${item.img}`)} alt=''/>
    </div>);

    return (
        <> 
            <section className='all-patterns col-12 col-xl-10'>
                <button>Zamknij</button>
            </section>
        </>
    );
};
 
export default AllPatterns;