import './Believe.css'
import { Parallax} from 'react-parallax';





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
      <p className='bttxt'>What We Believe</p>
    </div>
      <div className="btextbk">
        <ul className="bbtus">
            <li className='it t1'>White glove service</li>
            <li className='it t2'>Fine Delivery</li>
            <li className='it t3'>Guarenteed same day delivery</li>
           
        </ul>
      </div>
      </div>
     
      

        
        
      </Parallax>
          
     
  )
}

export default Believe;