import React, { useState, useEffect, useCallback } from "react";
import { Link } from "gatsby";
import throttle from "lodash.throttle";

import Logo from "../assets/logo.svg";
import Menu from "../assets/menu.svg";
import styles from "./navbar.module.css";

function Navbar() {
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
      className={`flex items-center justify-center py-3 sticky top-0 z-50 ${
        !isTransparent ? `bg-gradient ${styles.shadow}` : ""
      }`}
    >
      <div className="flex justify-between w-11/12">
        <Link to="/">
          <img className={styles.logo} src={Logo} alt="Fullstack Nights Logo" />
        </Link>
        <div className={`hidden md:flex items-center ${styles.linksWrapper}`}>
          <Link to="/about/" className="text-white text-rg uppercase mr-4">
            About
          </Link>
          <Link to="/schedule/" className="text-white text-rg uppercase mr-4">
            Schedule
          </Link>
          <Link
            to="/become-a-speaker/"
            className="text-white text-rg uppercase mr-4"
          >
            Become a Speaker
          </Link>
          <Link
            to="/become-a-moderator/"
            className="text-white text-rg uppercase"
          >
            Become a Moderator
          </Link>
        </div>
        <div className="flex md:hidden">
          <button>
            <img class="h-6 w-6" src={Menu} alt="hamburger menu" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
