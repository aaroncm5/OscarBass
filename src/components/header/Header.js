import instagram from '../../assets/icons/instagram.png';
import facebook from '../../assets/icons/facebook.png';
import email from '../../assets/icons/email.png';
import tiktok from '../../assets/icons/tiktok.png'
import mobileMenu from'../../assets/icons/mobileMenu.png'
import logo from '../../assets/icons/logo.png'
import {NavLink, Link} from 'react-router-dom'
import { useState } from 'react';
import './Header.scss'

const Header = () => {

  const [show, setShow] = useState(false)

  const handleClick = (status) => {
    setShow(status)
  }

  const closeMenu = () => {
      setShow(false)
  }

  return (
    <header className='header'>
      <div className="logo">
        <Link className='logo-link' to="/">
          <img className='logo-link__image' src={logo} alt="Oscars Logo" />
        </Link>
      </div>

      <div className='mobile-menu'>
        <img className='mobile-menu__icon' onClick={() => {handleClick(true)}} src={mobileMenu} alt="" />

      </div>

      <nav className="nav">
        <ul className="nav-list">
          <NavLink className='nav-list__item' to='/'>about</NavLink>
          <NavLink className='nav-list__item' to='/'>music</NavLink>
          <NavLink className='nav-list__item' to='/'>videos</NavLink>
          <NavLink className='nav-list__item' to='/'>shows</NavLink>
        </ul>
        {/* <ul className="socialLinks">
          <Link to='https://www.instagram.com/oscarsbass/'>
              <img src={instagram} alt="instagram icon" />
          </Link>
          <Link to="https://www.facebook.com/oscar.bass.7">
              <img src={facebook} alt="facebook icon" />
          </Link>
          <Link to="https://www.tiktok.com/@oscarbass">
              <img src={tiktok} alt="tiktok icon" />
          </Link>
          <Link to='mailto:oanesetti66@gmail.com'>
              <img src={email} alt="email icon" />
          </Link>
        </ul> */}
      </nav>
    </header>
  );
};

export default Header;
