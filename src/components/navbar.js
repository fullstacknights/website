import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import throttle from "lodash.throttle";

import Logo from "../assets/logo.svg";
import Menu from "../assets/menu.svg";
import { SECTIONS } from "../constants";
import styles from "./navbar.module.css";

function Navbar({ toggleMenu }) {
  const [isTransparent, setIsTransparent] = useState(true);
  const handleScroll = useCallback(
    throttle(() => {
      const scrollPosition = window.scrollY;

      if (scrollPosition >= 180 && isTransparent) {
        setIsTransparent(false);
      } else if (scrollPosition <= 180 && !isTransparent) {
        setIsTransparent(true);
      }
    }),
    [isTransparent]
  );

  useEffect(() => {
    const onScroll = window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [handleScroll]);

  return (
    <nav
      className={`flex items-center justify-center py-3 sticky top-0 z-40 ${
        !isTransparent ? `bg-gradient ${styles.shadow}` : ""
      }`}
    >
      <div className="flex justify-between w-11/12 max-w-6xl">
        <Link to="/">
          <img className={styles.logo} src={Logo} alt="Fullstack Nights Logo" />
        </Link>
        <div className={`hidden md:flex items-center ${styles.linksWrapper}`}>
          {SECTIONS.map((section, index) => (
            <Link
              key={index}
              to={section.to}
              className="text-white text-rg uppercase mr-4"
            >
              {section.title}
            </Link>
          ))}
        </div>
        <div className="flex md:hidden">
          <button onClick={toggleMenu}>
            <img className="h-6 w-6" src={Menu} alt="hamburger menu" />
          </button>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  toggleMenu: PropTypes.func
};

export default Navbar;
