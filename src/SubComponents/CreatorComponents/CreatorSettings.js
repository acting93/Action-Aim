import React from 'react';

const CreatorSettings = () => {
    return ( 
        <>
            <p>Ustawienia</p>
            <div className='creator-sett-content'>
                <button><i className="fas fa-save"></i>Zapisz</button>
                <button><i className="fas fa-trash-alt"></i>Usuń</button>
                <button><i className="fas fa-broom"></i>Reset</button>
            </div>
            <div className='creator-summary'>
                <p className='summary-title'>Podsumowanie</p>
                <div className='summary-element'>
                    <p>Kolor:</p>
                </div>
                <div className='summary-element'>
                    <p>Rozmiar:</p>
                </div>
                <div className='summary-element'>
                    <p>Ilość sztuk:</p>
                    <input
                        type='number'
                        name='pieces'
                    />
                </div>
                <div className='summary-element'>
                    <p>Suma:</p>
                    <p className='price'>15,00 zł</p>
                </div>
                <button className='buy'>Kup</button>
            </div>
        </>
     );
}
 
export default CreatorSettings;