import React from "react";

import styles from "./avatar.module.css";

import Twitter from "../assets/twitter-circle.svg";

import Icon from "./icon";
import Avatar from "./avatar";

export default function({ img, name, twitterLink }) {
  return (
    <div className={styles.container}>
      <img className={`avatar m-auto ${styles.img}`} src={img} alt={name} />
      <p className="mt-3">{name}</p>
      <p className="flex justify-center mt-2">
        <Icon url={twitterLink} icon={Twitter} alt="Twitter link" />
      </p>
    </div>
  ); 
}
