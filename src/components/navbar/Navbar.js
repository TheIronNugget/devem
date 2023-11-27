import './Navbar.css';
import logo from '../../images/logoreshapee.png';
const Navbar = () => {
  return (
    <div className='nav-con'>
      <div className="logohug">
        <a className='lnk' href="/" style={{
          background:` url(${logo}) center/cover no-repeat`
          }}><div></div></a>
      </div>
        
        
        <ul className='nav-items'>
            <li className='nav-item'><a href="/">About</a></li>
            <li className='nav-item'><a href="/">Services</a></li>
            <li className='nav-item'><a href="/">Contacts</a></li>
        </ul>
    
    </div>
  )
}

export default Navbar;