import React from 'react';
import {useSelector} from 'react-redux';
import Logo from '../../img/action3.png';

const Summary = () => {

    const quantity = useSelector(state => state.tshirtReducer.activeSizePerColor);
    const colorTshirt = useSelector(state => state.tshirtReducer.activeColor);
    const size = useSelector(state => state.tshirtReducer.choosenSize);
    const pattern = useSelector(state => state.tshirtReducer.tshirtPattern);
    const topPositionPattern = useSelector(state => state.tshirtReducer.topPositionPattern);
    return ( 
        <>
            <section className='summary col-xl-8 col-12'>
                <div className='summary-title'><p>Podsumowanie</p></div>
                <div className='summary-content'>
                    <div className='summary-content-element'>
                        <div className='tshirt-summary' style={{backgroundColor:colorTshirt}}>
                            <div className='tshirt-summary-pattern' >
                                <img src={(require(`../../img/${pattern}`))} style={{top:`${topPositionPattern}%`}} alt=''/>
                            </div>
                        </div>
                    </div>
                    <div className='summary-content-element'>
                        <div className='summary-logo'><img src={Logo} alt=''/></div>
                        <table>
                            <tr>
                                <td>Rozmiar</td>
                                <td>{size}</td>
                            </tr>
                            <tr>
                                <td>Ilość</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>Kolor</td>
                                <td><div className='summary-color' style={{background:colorTshirt}}></div></td>
                            </tr>
                        </table>
                        <div className='summary-buttons'>
                            <button>Dodaj do koszyka</button>
                            <button>Anuluj</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Summary;
