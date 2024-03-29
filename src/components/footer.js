import React from "react";
import { useTranslation } from "react-i18next";

import { Link } from "gatsby";

import Facebook from "../assets/facebook-circle.svg";
import Twitter from "../assets/twitter-circle.svg";
import YouTube from "../assets/youtube-circle.svg";
import Github from "../assets/github-circle.svg";
import * as styles from "./footer.module.css";

const YOUTUBE_LINK = "https://www.youtube.com/channel/UCiJwjxdD9XIjRpV__kW2wsw";
const FACEBOOK_LINK = "https://www.facebook.com/FullstackNights";
const TWITTER_LINK = "https://twitter.com/fullstacknights";
const GITHUB_LINK = "https://github.com/fullstacknights";

function Icon({ url, icon, alt }) {
  return (
    <a className="mr-2" href={url} target="_blank" rel="noopener noreferrer">
      <img className={styles.logo} src={icon} alt={alt} />
    </a>
  );
}

function Footer() {
  const { t } = useTranslation();

  return (
    <footer
      className="flex items-center justify-center py-3 bg-background"
      style={{ borderTop: "2px solid rgba(207,215,223,.25)" }}
    >
      <a href="https://www.netlify.com" className="px-2">
        <img
          src="https://www.netlify.com/v3/img/components/netlify-color-accent.svg"
          alt="Deploys by Netlify"
        />
      </a>
      <div className="flex flex-wrap items-center justify-between w-11/12 max-w-6xl">
        <div className="flex items-center">
          <Icon url={FACEBOOK_LINK} icon={Facebook} alt="Facebook link" />
          <Icon url={TWITTER_LINK} icon={Twitter} alt="Twitter link" />
          <Icon url={YOUTUBE_LINK} icon={YouTube} alt="YouTube link" />
          <Icon url={GITHUB_LINK} icon={Github} alt="Github link" />
        </div>
        <Link className="link" to="/code-of-conduct/">
          {t("footer.code-of-conduct")}
        </Link>
        <p className="flex-1 text-center mt-4 lg:mt-0 lg:text-right">
          Copyright © Fullstack Nights {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
