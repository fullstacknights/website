import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import throttle from "lodash.throttle";

import BrandLogo from "../assets/brand-logo.svg";
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
        <Link className="flex flex-row items-center" to="/">
          <img
            className={styles.logo}
            src={BrandLogo}
            alt="Fullstack Nights Logo"
          />
          <h4 className="text-white font-bold text-h4 pl-2">
            Fullstack Nights
          </h4>
        </Link>
        <div className={`hidden lg:flex items-center ${styles.linksWrapper}`}>
          {SECTIONS.map((section, index) => (
            <Link
              key={index}
              to={section.to}
              className="text-white text-rg uppercase mr-4 link"
            >
              {section.title}
            </Link>
          ))}
        </div>
        <div className="flex lg:hidden">
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
