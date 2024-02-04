
import './Mid.css';

import { Parallax} from 'react-parallax';





const Mid = () => {
  return (
    <div className="2half">
    <Parallax  className='mid-con' strength={800} 
    renderLayer={percentage => (
      <div
          style={{
              position: 'absolute',
              background: `rgba(255, 34, 34, ${percentage * 0.5})`,
              left: '18%',
              top: '5%',
              width: percentage * 400,
              height: percentage * 400,
          }}
      />
  )} >
    
  <div className="upperMid" id="about">
    <div className="titleblock">
      <p className='ttxt '>About</p>
    </div>
      <div className="textbk">
        <p className="btus ">
        <span>We believe </span>that there is a place for high-quality, efficient, and safe deliveries. Our goal is to create standard of excellence through our services and products. < br/>< br/><span>To create </span> a transportation network with greater reach while cultivating and maintaining our client's trust with our exellent shipping and recieving of products.
        </p>
      </div>
      </div>
     
      

        
        
      </Parallax>
          
      </div>
  )
}

export default Mid;