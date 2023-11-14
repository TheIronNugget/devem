import './Hero.css';
import im1 from '../../images/img1.png';


const Hero = () => {
  return (
    <div className='hero-con' style={{
      background:`linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0.1)), url(${im1}) center/cover no-repeat`
    }} >
        <div className="text-con">
            <p className='wd'>HPG Transportation and Courier Services</p>
            <p className='wd mtext'> Treat yourself to a better delivery service that fit your everyday needs with
            Hey Pretty Gurl Transportation and Courier Services. We offer time-sensitive, efficient, an reliable deliveries. Our services are available to inividuals and companies both large and small.
            </p>            
        </div>
        <div className="btn-con">
          <button className='btn bt1'> Contact Us</button>
          <button className='btn bt2'> Get Started</button>
        </div>
    </div>
  )
}

export default Hero;