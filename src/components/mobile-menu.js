import React from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import Cross from "../assets/cross.svg";
import { getSections } from "../constants";
import styles from "./mobile-menu.module.css";
import { getLanguageSwitcher } from "../i18n";

function MobileMenu({ isOpen, toggleMenu }) {
  const { i18n } = useTranslation();
  const sections = getSections(i18n);

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-screen h-screen bg-gradient p-6 ${
        styles.container
      } ${isOpen ? styles.containerOpened : ""}`}
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-end">
          <button onClick={toggleMenu}>
            <img className="h-4 w-4" src={Cross} alt="cross" />
          </button>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center text-center self-center">
          {sections.map((section, index) => (
            <Link
              key={index}
              to={section.to}
              className="text-white text-rg uppercase my-4 link"
            >
              {section.title}
            </Link>
          ))}

          {getLanguageSwitcher({
            i18n,
            classNames: "text-white text-rg uppercase my-4 link"
          })}
        </div>
      </div>
    </div>
  );
}

MobileMenu.propTypes = {
  isOpen: PropTypes.bool,
  toggleMenu: PropTypes.func
};

export default MobileMenu;
