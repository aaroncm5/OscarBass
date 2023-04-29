import instagram from '../../assets/icons/instagram.png';
import facebook from '../../assets/icons/facebook.png';
import email from '../../assets/icons/email.png';
import tiktok from '../../assets/icons/tiktok.png'
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className="logo">
        <a href="/">
          <img src="" alt="Oscars Logo" />
        </a>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <NavLink className='nav-list__item' to='/'>about</NavLink>
          <NavLink className='nav-list__item' to='/'>music</NavLink>
          <NavLink className='nav-list__item' to='/'>videos</NavLink>
          <NavLink className='nav-list__item' to='/'>shows</NavLink>
        </ul>
        <ul className="socialLinks">
          <li>
            <a href="https://www.instagram.com/oscarsbass/">
              <img src={instagram} alt="instagram icon" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/oscar.bass.7">
              <img src={facebook} alt="facebook icon" />
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@oscarbass">
              <img src={tiktok} alt="tiktok icon" />
            </a>
          </li>
          <li>
            <a href="mailto:oanesetti66@gmail.com">
              <img src={email} alt="email icon" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
