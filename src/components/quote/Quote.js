import React from 'react';
import './Quote.css';


import CardV2 from '../cards/CardV2.jsx';
const Quote = () => {
  return (
    <div className="wrapper" id="services">
      <p className='qc'>Services</p>
    <div className='quoteCon' >
      <CardV2 title="Economy" days="Monday-Friday" perks="6am-6pm" />
      <CardV2 title="Standard" days="Monday-Friday" adday="+Saturday" perks="6am-6pm" adderk2="6am-1pm" />
      <CardV2 title="Express" days="Monday-Saturday" adday="+Sunday(by appointment)" perks="24/7" />
    
    </div>
    </div>
  )
}

export default Quote;