import './Hero.css';
import im1 from '../../images/img1.png';
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <Parallax className='hero-con' blur={2} bgImage={im1} bgImageAlt="heroCar"   strength={0}>
    <div className="backplate">
       
        <div className="text-con">
            <p className='wd animate__animated animate__fadeInLeft'>HPG Transportation & Courier Services</p>
            <div className='brd'></div>
            <p className='wd mtext animate__animated animate__fadeInRight'> Treat yourself to a better delivery service that fit your everyday needs with
            Hey Pretty Gurl Transportation and Courier Services.
            </p>            
        </div>
        <div className="btn-con">
          <button className='btn bt1 animate__animated animate__fadeInUp'><Link className="yayo" to="/contact"> Contact Us</Link></button>
          <button className='btn bt2 animate__animated animate__fadeInDown'><a className='yay' href="#services"> Get Started</a></button>
        </div>
        
        </div>
    </Parallax>
    
  )
}

export default Hero;