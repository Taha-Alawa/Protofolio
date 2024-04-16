import { NavLink, Link } from "react-router-dom";
import logo from "../assets/images/full-logo.png";
import instagram from "../assets/images/instagram.png";
import whatsapp from "../assets/images/whatsapp.png";
import linkedin from "../assets/images/linkedin.png";

export default function Footer() {
  return (
    <footer>
      <img src={logo} alt="" />
      <ul>
        <li>
          <NavLink
            end
            className={({ isActive }) => (isActive ? "activePath" : null)}
            to="/"
          >
            الرئيسية
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "activePath" : null)}
            to="/projects"
          >
            مشاريعي
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "activePath" : null)}
            to="/about"
          >
            من انا؟
          </NavLink>
        </li>
      </ul>
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
    </footer>
  );
}
