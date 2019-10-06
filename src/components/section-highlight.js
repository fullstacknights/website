import React from "react";

import styles from "./section-highlight.module.css";

function SectionHighlight({ children, className }) {
  return (
    <section className={`${styles.container} ${className}`}>{children}</section>
  );
}

export default SectionHighlight;
