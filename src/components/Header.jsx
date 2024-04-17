import { NavLink, Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import logo from "../assets/images/full-logo.png"
import instagram from "../assets/images/instagram.png"
import whatsapp from "../assets/images/whatsapp.png"
import linkedin from "../assets/images/linkedin.png"

const Header = () => {
  const navRef = useRef(null);

  const showNavBar = () => {
    navRef.current.classList.toggle("show-navbar");
  };

  const handlePhoneNumberClick = () => {
    window.location.href = 'tel:+966509804628';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:taha.dev00@gmail.com';
  };
  
  return (
    <header id="header">
      <img className="logo" src={logo} />
      <nav ref={navRef}>
        <NavLink
          className={({ isActive }) => (isActive ? "activePath" : null)}
          end
          to="/"
          onClick={showNavBar}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "activePath" : null)}
          to="/projects"
          onClick={showNavBar}
        >
          Projects
        </NavLink>
        <div className="small-screen-content">
          <Link to="#" onClick={handlePhoneNumberClick} className="phone-number">+966 50 980 4628</Link>
          <Link to="#" onClick={handleEmailClick}>taha.dev00@gmail.com</Link>
          <ul>
        <li>
          <Link
            className="social-media"
            to="https://www.instagram.com/i00h8?igsh=ZTM4ZDRiNzUwMw=="
          >
            <img src={instagram} />
          </Link>
        </li>
        <li>
          <Link className="social-media" to="https://wa.me/qr/4DPHUJ4SWX7BC1">
            <img src={whatsapp} />
          </Link>
        </li>
        <li>
          <Link
            className="social-media"
            to="https://www.linkedin.com/in/taha-alawa-2a2a7427b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          >
            <img src={linkedin} />
          </Link>
        </li>
      </ul>
        </div>
        <button className="closeBtn" onClick={showNavBar}>
          &times;
        </button>
      </nav>
      <button className="menuBtn" onClick={showNavBar}>
        &#9776;
      </button>
    </header>
  );
};

export default Header;
