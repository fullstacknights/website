import React from "react";

import styles from "./footer.module.css";

function Icon({ url, icon, alt }) {
  return (
    <a className="mr-2" href={url} target="_blank" rel="noopener noreferrer">
      <img className={styles.logo} src={icon} alt={alt} />
    </a>
  );
}

export default Icon;
