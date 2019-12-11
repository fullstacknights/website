import React from "react";
import { Link } from "gatsby";

import Facebook from "../assets/facebook-circle.svg";
import Twitter from "../assets/twitter-circle.svg";
import YouTube from "../assets/youtube-circle.svg";
import Github from "../assets/github-circle.svg";
import styles from "./footer.module.css";

import Icon from "./icon";

const YOUTUBE_LINK = "https://www.youtube.com/channel/UCiJwjxdD9XIjRpV__kW2wsw";
const FACEBOOK_LINK = "https://www.facebook.com/FullstackNights";
const TWITTER_LINK = "https://twitter.com/fullstacknights";
const GITHUB_LINK = "https://github.com/fullstacknights";

function Footer() {
  return (
    <footer
      className="flex items-center justify-center py-3 bg-background"
      style={{ borderTop: "2px solid rgba(207,215,223,.25)" }}
    >
      <div className="flex flex-wrap items-center justify-between w-11/12 max-w-6xl">
        <div className="flex items-center">
          <Icon url={FACEBOOK_LINK} icon={Facebook} alt="Facebook link" />
          <Icon url={TWITTER_LINK} icon={Twitter} alt="Twitter link" />
          <Icon url={YOUTUBE_LINK} icon={YouTube} alt="YouTube link" />
          <Icon url={GITHUB_LINK} icon={Github} alt="Github link" />
        </div>
        <Link className="link" to="/code-of-conduct/">
          Code of Conduct
        </Link>
        <p className="flex-1 text-center mt-4 lg:mt-0 lg:text-right">
          Copyright © Fullstack Nights 2019
        </p>
      </div>
    </footer>
  );
}

export default Footer;
