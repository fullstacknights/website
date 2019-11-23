import React from "react";
import PropTypes from "prop-types";

import Card from "./card";
import styles from "./profile-card.module.css";
import BrandLogo from "../assets/brand-logo.svg";
import GitHub from "../assets/github.svg";
import Twitter from "../assets/twitter.svg";
import Dribbble from "../assets/dribbble.svg";

function getNetworkIcon(network) {
  switch (network) {
    case "twitter":
      return Twitter;
    case "github":
      return GitHub;
    case "dribbble":
      return Dribbble;
    default:
      return "";
  }
}

function ProfileCard({ name, img, title, links }) {
  return (
    <Card
      className={`${styles.container} items-center p-6 w-full m-auto mb-4 lg:m-0 lg:mb-0 lg:mr-5 lg:ml-5`}
      variant="dark"
    >
      <div className="mb-4">
        <img className={`avatar ${styles.img}`} src={img} alt={name} />
      </div>
      <h4 className="text-h4 text-white font-extrabold text-center">{name}</h4>
      <div className="mt-3 mb-4">
        <img
          className={styles.brandLogo}
          src={BrandLogo}
          alt="Fullstack Nights Logo"
        />
      </div>
      <p className="text-rg text-white text-center">{title}</p>
      <div
        className={`${styles.socialNetworkContainer} flex items-center mt-4`}
      >
        {links.map(link => (
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            <img
              className={
                link.network === "twitter"
                  ? styles.socialNetworkTwitter
                  : styles.socialNetwork
              }
              src={getNetworkIcon(link.network)}
              alt={link.network}
            />
          </a>
        ))}
      </div>
    </Card>
  );
}

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};

export default ProfileCard;
