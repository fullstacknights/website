import React from "react";

import Logo from "../assets/logo.svg";
import styles from "./navbar.module.css";

function Navbar() {
  return (
    <nav className="flex items-center justify-center py-3 bg-gradient sticky top-0 z-50">
      <div className="flex justify-between w-11/12">
        <a href="/">
          <img className={styles.logo} src={Logo} alt="Fullstack Nights Logo" />
        </a>
        <div className={`flex items-center ${styles.linksWrapper}`}>
          <a href="" className="text-white text-rg uppercase mr-4">
            About
          </a>
          <a href="" className="text-white text-rg uppercase mr-4">
            Events
          </a>
          <a href="" className="text-white text-rg uppercase mr-4">
            Schedule
          </a>
          <a href="" className="text-white text-rg uppercase mr-4">
            Videos
          </a>
          <a href="" className="text-white text-rg uppercase">
            Podcast
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
