import React, { useState, useCallback } from "react";

import MobileMenu from "./mobile-menu";
import Navbar from "./navbar";

function Menu() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const toggleMenu = useCallback(
    function() {
      setShowMobileMenu(!showMobileMenu);
    },
    [showMobileMenu]
  );

  return (
    <>
      <Navbar toggleMenu={toggleMenu} />
      <MobileMenu isOpen={showMobileMenu} toggleMenu={toggleMenu} />
    </>
  );
}

export default Menu;
