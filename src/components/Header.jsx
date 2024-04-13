import { NavLink, Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import logo from "../assets/images/full-logo.png"

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
          الرئيسية
        </NavLink>
        <div className="small-screen-content">
          <Link to="#" onClick={handlePhoneNumberClick} className="phone-number">+966 50 980 4628</Link>
          <Link to="#" onClick={handleEmailClick}>MyGmail@gmail.com</Link>
          <ul>
            <li><Link className="social-media"><img src="" /></Link></li>
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
