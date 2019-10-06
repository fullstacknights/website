import React from "react";

import styles from "./gradient-background.module.css";

function GradientBackground({ children, className }) {
  return (
    <section className={`${styles.container} ${className}`}>{children}</section>
  );
}

export default GradientBackground;
