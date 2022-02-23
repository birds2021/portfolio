import React from "react";
import { Link } from "react-scroll";
import "./header.css";

function Header() {
  return (
    <>
      <div className="Header">
        <div className="Header_Left">
          <h4>
            Deve<span>LO</span>per
          </h4>
        </div>

        <div className="Header_Right">
          <Link to="About" smooth={true} duration={500}>
            <h6>About</h6>
          </Link>

          <Link to="Skill" smooth={true} duration={500}>
            <h6>Skill</h6>
          </Link>

          <Link to="Projects" smooth={true} duration={500}>
            <h6>Projects</h6>
          </Link>

          <Link to="Contact" smooth={true} duration={500}>
            <h6>Contact</h6>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
