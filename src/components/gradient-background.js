import React from "react";
import PropTypes from "prop-types";

import styles from "./gradient-background.module.css";

function GradientBackground({ children, className }) {
  return (
    <section className={`${styles.container} ${className}`}>{children}</section>
  );
}

GradientBackground.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  className: PropTypes.string
};

export default GradientBackground;
