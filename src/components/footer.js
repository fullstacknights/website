import React from "react";

import Facebook from "../assets/facebook.svg";
import Github from "../assets/github.svg";
import Twitter from "../assets/twitter.svg";
import YouTube from "../assets/youtube.svg";
import styles from "./footer.module.css";

function Icon({ url, icon }) {
  return (
    <a className="mr-2" href={url}>
      <img className={styles.logo} src={icon} alt="Facebook logo" />
    </a>
  );
}

function Footer() {
  return (
    <footer className="flex items-center justify-center py-3 bg-background">
      <div class="flex items-center justify-between w-11/12">
        <div className="flex items-center">
          <Icon url="/" icon={Facebook} />
          <Icon url="/" icon={Twitter} />
          <Icon url="/" icon={YouTube} />
          <Icon url="/" icon={Github} />
          <a href="">Code of Conduct</a>
        </div>
        <p>Copyright © Fullstack Nights 2019</p>
      </div>
    </footer>
  );
}

export default Footer;
