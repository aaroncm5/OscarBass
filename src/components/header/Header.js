const Header = () => {
  return (
    <header>
      <div className="logo">
        <a href="/">
          <img src="" alt="Oscars Logo" />
        </a>
      </div>
      <nav className="navLinks">
        <ul className="siteLinks">
          <li>about</li>
          <li>music</li>
          <li>videos</li>
          <li>shows</li>
        </ul>
        <ul className="socialLinks">
          <li>
            <a href="https://www.instagram.com/oscarsbass/">
              <img src="" alt="instagram icon" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/oscar.bass.7">
              <img src="" alt="facebook icon" />
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@oscarbass">
              <img src="" alt="tiktok icon" />
            </a>
          </li>
          <li>
            <a href="mailto:oanesetti66@gmail.com">
              <img src="" alt="email icon" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
