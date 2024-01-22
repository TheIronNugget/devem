import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../images/logoreshapee.png';
const Navbar = () => {
  return (
    <div className='nav-con'>
      <div className="together">
      <div className="logohug">
        <Link to="/devem" className='lnk' href="/" style={{
          background:` url(${logo}) center/cover no-repeat`
          }}><div></div></Link>
      </div>
        
        
        <ul className='nav-items'>
            <li className='nav-item'><a href="#about">About</a></li>
            <li className='nav-item'><a href="#services">Services</a></li>
            <li className='nav-item'><Link to='/contact'>Contacts</Link></li>
        </ul>
        </div>
          
    </div>
  )
}

export default Navbar;