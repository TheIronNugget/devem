import './Believe.css'
import { Parallax} from 'react-parallax';

import w1 from '../../images/reshot-icon-parcels-QP35BZ2XTA.svg';
import f1 from '../../images/reshot-icon-delivery-service-THB7G3KLNX.svg';
import s1 from '../../images/reshot-icon-fast-delivery-MYXAG6DCQR.svg';



const Believe = () => {
  return (
   
    <Parallax  className='b-con' strength={-800} 
    renderLayer={percentage => (
      <div
          style={{
              position: 'absolute',
              background: `rgba(255, 34, 34, ${percentage * 0.5})`,
              left: '0%',
              top: '45%',
              width: percentage * 700,
              height: 200,
          }}
      />
  )} >
    
  <div className="bMid" id="believe">
    <div className="bblock">
      <p className='bttxt'>We Believe in</p>
    </div>
      <div className="btextbk">
        <ul className="bbtus">
            <li className='it t1'>
              <img className='ig' src={w1} alt="white glove" />
                <p className='bx'>White glove service</p>
            </li>
            <li className='it t2'>
              <img className='ig' src={s1} alt="fine delivery" />
              <p className='bx'>Fine Delivery</p>
            </li>
            <li className='it t3'>
              <img className='ig' src={f1} alt="same day" />
              <p className='bx'>Guarenteed same day delivery</p>
            </li>
           
        </ul>
      </div>
      </div>
     
      

        
        
      </Parallax>
          
     
  )
}

export default Believe;