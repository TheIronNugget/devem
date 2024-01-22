import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import './Navbar.css';
import logo from '../../images/logoreshapee.png';

const Navbar2 = () => {
  return (
    <div className='nav-con'>
      <div className="together">
      <div className="logohug">
        <Link to="/devem" className='lnk' href="/" style={{
          background:` url(${logo}) center/cover no-repeat`
          }}><div></div></Link>
      </div>
        
        
        <ul className='nav-items'>
            <li className='nav-item'><Link to="/devem">About</Link></li>
            <li className='nav-item'><Link to="/devem">Services</Link></li>
            <li className='nav-item'><Link to='/contact'>Contacts</Link></li>
        </ul>
        </div>
          <Outlet />
    </div>
  )
}

export default Navbar2