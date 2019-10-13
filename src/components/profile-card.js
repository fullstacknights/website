import React from "react";
import PropTypes from "prop-types";

import Card from "./card";
import styles from "./profile-card.module.css";
import BrandLogo from "../assets/brand-logo.svg";
import GitHub from "../assets/github.svg";
import Twitter from "../assets/twitter.svg";

function ProfileCard({ name, img, title }) {
  return (
    <Card className={`items-center p-6 ${styles.container}`} variant="dark">
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
        <a href="">
          <img className={styles.socialNetwork} src={Twitter} alt="" />
        </a>
        <a href="">
          <img className={styles.socialNetwork} src={GitHub} alt="" />
        </a>
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
