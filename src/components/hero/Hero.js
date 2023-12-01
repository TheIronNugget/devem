import './Hero.css';
import im1 from '../../images/logoreshapee.png';


const Hero = () => {
  return (
    <div className='hero-con'>
    <div className="backplate">
        <div className="imy" style={{
             background:`linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,1)), url(${im1}) center/cover no-repeat`
           }} />
        <div className="text-con">
            <p className='wd'>HPG Transportation & Courier Services</p>
            <div className='brd'></div>
            <p className='wd mtext'> Treat yourself to a better delivery service that fit your everyday needs with
            Hey Pretty Gurl Transportation and Courier Services.
            </p>            
        </div>
        <div className="btn-con">
          <button className='btn bt1'> Contact Us</button>
          <button className='btn bt2'> Get Started</button>
        </div>
        
        </div>
    </div>
  )
}

export default Hero;