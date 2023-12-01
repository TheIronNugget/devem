import './Mid.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Parallax, Background } from 'react-parallax';
import earthy from '../../images/earth.png';
import handy from '../../images/handshake.png';
import medy from '../../images/medeq.png';
import c1 from '../../images/cfarcr.jpeg';
import c2 from '../../images/ckart.jpeg';
import c3 from '../../images/csidedr.jpeg';
import rs from '../../images/redsmudge.svg';



const Mid = () => {
  return (
    <Parallax  className='mid-con' strength={800} 
    renderLayer={percentage => (
      <div
          style={{
              position: 'absolute',
              background: `rgba(255, 34, 34, ${percentage * 0.5})`,
              left: '18%',
              top: '0',
              width: percentage * 500,
              height: percentage * 500,
          }}
      />
  )} >
    
  <div className="upperMid" id="about">
    <div className="titleblock">
      <p className='ttxt'>About Us</p>
    </div>
      <div className="textbk">
        <p className="btus">
        We believe that there is a place for high-quality, efficient, and safe deliveries. Our goal is to create standard of excellence through our services and products. To create a transportation network with greater reach while cultivating and maintaining our client's trust with our exellent shipping and recieving of products.
        </p>
      </div>
      </div>
      <Parallax  className='pr2' blur={50} bgImage={rs} bgImageAlt="redsmudge"   strength={-800} >
      <div className="blocks1">
        <div className="blocks2">
          <div className="block b1">
            
              
              
              <div className="tc eDes">
                <div className='imgnail' 
                  style={{
                  background:`linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0)), url(${earthy}) center/cover no-repeat`
                  }} 
                />

                <p className='pp p1'> We are dedicated to serving customers in the South Jersey, Delaware, and Pennsylvania area with utmost pride. </p>
              </div>
          </div>

          <div className="block b2">
            
          
            <div className="tc hsDes">
            <div className='imgnail' 
            style={{
            background:`linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0)), url(${handy}) center/cover no-repeat`
            }} 
          />
              <p className='pp p2'> Our commitment is to consistently provide exceptional delivery that leave both you and your recipients fully content.</p>
            </div>
          </div>

          <div className="block b3">
          
      
            
            <div className="tc medeqDes">

            <div className='imgnail' 
                  style={{
                  background:`linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0)), url(${medy}) center/cover no-repeat`
                  }} 
                />
              <p className='pp p3'> No matter if you require delivery of medical, legal, or automotive parts, HPG T&C Services are fully prepared to cater to your needs.  </p>
            </div>
          </div>
        </div>
        <div className="blocks3">
        <Carousel width="500px"  autoPlay="True" infiniteLoop="True"  showThumbs="False" showStatus="False">
          <div>
              <img className='r1 buns' src={c1} width="200px" height="500px" />
              
          </div>
          <div>
              <img className='buns' src={c2} width="200px" height="500px" />
              
          </div>
          <div>
              <img className='buns' src={c3} width="50px" height="500px" />
              
          </div>
          
          
        </Carousel>
        </div>
      </div>
      </Parallax>

        
        
      </Parallax>
  )
}

export default Mid;