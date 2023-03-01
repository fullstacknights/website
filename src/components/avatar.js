import React from "react";

import Twitter from "../assets/twitter.inline.svg";
import GitHub from "../assets/github.inline.svg";

import styles from "./avatar.module.css";

function getNetworkIcon(network) {
  switch (network) {
    case "twitter":
      return <Twitter />;
    case "github":
      return <GitHub />;
    default:
      return;
  }
}
export default function({ img, name, social = [] }) {
  return (
    <div className={styles.container}>
      <img className={`avatar m-auto ${styles.img}`} src={img} alt={name} />
      <p className="mt-3">{name}</p>
      <div className="flex justify-center">
        {social.map(s => {
          return (
            <a
              key={s.link}
              href={s.link}
              className="w-6 mt-5"
              target="_blank"
              rel="noopener noreferrer"
            >
              {getNetworkIcon(s.network)}
            </a>
          );
        })}
      </div>
    </div>
  );
}
