import React from "react";

import styles from "./avatar.module.css";

export default function({ img, name }) {
  return (
    <div className={styles.container}>
      <img className={`avatar m-auto ${styles.img}`} src={img} alt={name} />
      <p className="mt-3">{name}</p>
    </div>
  );
}
