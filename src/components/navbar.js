import React, { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import throttle from "lodash.throttle";

import Logo from "../images/logo.png";
import Menu from "../assets/menu.svg";
import { getSections } from "../constants";
import styles from "./navbar.module.css";

import { getLanguageSwitcher } from "../i18n";

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

  const { i18n } = useTranslation();
  const sections = getSections(i18n);

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
      <div className="flex justify-between w-11/12 max-w-6xl overflow-x-auto">
        <Link className="flex flex-row flex-no-wrap items-center" to="/">
          <img className={styles.logo} src={Logo} alt="Fullstack Nights Logo" />
        </Link>
        <div className={`hidden lg:flex items-center ${styles.linksWrapper}`}>
          {sections.map((section, index) => (
            <Link
              key={index}
              to={section.to}
              className="text-white text-rg uppercase mr-4 link"
            >
              {section.title}
            </Link>
          ))}

          {getLanguageSwitcher({
            i18n,
            classNames: "text-white text-rg uppercase mr-4 link"
          })}
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
