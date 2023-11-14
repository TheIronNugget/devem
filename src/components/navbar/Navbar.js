import './Navbar.css';

const Navbar = () => {
  return (
    <div className='nav-con'>
        <div className='logo'>
        
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