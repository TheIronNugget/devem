import './Mid.css';
import { Parallax } from 'react-parallax';
import earthy from '../../images/earth.png';
import handy from '../../images/handshake.png';
import medy from '../../images/medeq.png';
import red from '../../images/redrose2.jpg';

const Mid = () => {
  return (
    <Parallax  className='mid-con' bgImage={red} bgImageStyle={{opacity:'.5'}} strength={800}  >
    <div className="titleblock">
      <p className='ttxt'>About Us</p>
    </div>
    <div className="titleblock">
      <p className='ttxt'>About Us</p>
    </div>
      <div className="textbk">
        <p className="btus">
        We believe that there is a place high-quality, efficient, and safe deliveries. Our goal is to create standard of excellence through our services and products. To create a transportation network with greater reach while cultivating and maintaining our client's trust with our exellent shipping and recieving of products.
        </p>
      </div>
      <div className="block b1">
          <div className="pg earth" style={{
            background:`url(${earthy}) center/cover no-repeat`}} />
          
          
          <div className="tc eDes">
            <p className='pp p1'> We are dedicated to serving customers in the South Jersey, Delaware, and Pennsylvania area with utmost pride. </p>
          </div>
      </div>

      <div className="block b2">
        <div className="pg handshake" style={{
          background:`url(${handy}) center/cover no-repeat`}} />
      
        <div className="tc hsDes">
          <p className='pp p2'> Our commitment is to consistently provide exceptional delivery that leave both you and your recipients fully content.</p>
        </div>
      </div>

      <div className="block b3">
        <div className="pg medeq"style={{
          background:`url(${medy}) center/cover no-repeat`}} />
  
        
        <div className="tc medeqDes">
          <p className='pp p3'> No matter if you require delivery of medical, legal, or automotive parts, HPG T&C Services are fully prepared to cater to your needs.  </p>
        </div>
      </div>
      
      </Parallax>
  )
}

export default Mid;