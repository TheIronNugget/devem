import React from 'react'
import './CardV2.css';

const CardV2 = ({title, days, perks, adday, adderk,adderk2}) => {
  return (
    <div className="cardCon">
        <div className="twords">
            <p className='tt tword'>{title}</p>
        </div>
        <div className="days">
            <p className='tt day'>{days}</p>
            <p className='tt dayAdd'>{adday}</p>
            <p className='tt adderk2'>{adderk2}</p>
        </div>
        <div className='line'></div>
        <div className="perks">
            <p className='tt perk'>{perks}</p>
            <p className='tt adderk'>{adderk}</p>
        </div>
    </div>
  )
}

export default CardV2;