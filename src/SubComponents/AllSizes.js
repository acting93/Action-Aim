import React from 'react';
import {useDispatch} from 'react-redux';
import TshirtSize from '../img/tshirtPNG.png';

const AllSizes = () => {

    const dispatch = useDispatch();

    const hideSizesTable =()=>{
        dispatch({type:'SIZES_TABLE',show:false})
    };


    return ( 
        <>
            <section id='all-sizes'>
                <div id='sizes-title'>
                    <p>Tablica rozmiarów</p>
                    <button onClick={hideSizesTable}><i className="fa fa-times"></i></button>    
                </div>
                <div id='sizes-content'>
                    <div className='sizes-content-element'>
                        <img src={TshirtSize} alt=''/>
                    </div>
                    <div className='sizes-content-element'>
                        <p id='tshirt'>T-SHIRT</p>
                        <table>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td>XS</td>
                                    <td>S</td>
                                    <td>M</td>
                                    <td>L</td>
                                    <td>XL</td>
                                </tr>
                                <tr>
                                    <td>A</td>
                                    <td>48</td>
                                    <td>51</td>
                                    <td>53,5</td>
                                    <td>56</td>
                                    <td>58,5</td>
                                </tr>
                                <tr>
                                    <td>B</td>
                                    <td>68</td>
                                    <td>70</td>
                                    <td>72</td>
                                    <td>74</td>
                                    <td>76</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default AllSizes;