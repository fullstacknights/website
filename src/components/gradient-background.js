import React from "react";
import PropTypes from "prop-types";

import styles from "./gradient-background.module.css";

function GradientBackground({ children, className }) {
  return (
    <section className={`${styles.container} ${className}`}>
      <div className="w-11/12 max-w-6xl m-auto">{children}</div>
    </section>
  );
}

GradientBackground.defaultProps = {
  className: ""
};

GradientBackground.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  className: PropTypes.string
};

export default GradientBackground;
