import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import Card from "./card";
import styles from "./call-to-action.module.css";

function Division() {
  return <div className={`my-3 bg-primary ${styles.division}`}></div>;
}

function CallToAction({ title, description, url, urlTitle }) {
  const isExternalLink = url.includes("https");

  console.log({ isExternalLink });

  return (
    <Card className="items-center p-6">
      <h4 className="text-h4 font-extrabold">{title}</h4>
      <Division />
      <p className="text-lg text-center">{description}</p>
      {isExternalLink && url ? (
        <a className="btn btn--primary mt-11" href={url} target="_blank">
          {urlTitle}
        </a>
      ) : null}
      {!isExternalLink && url ? (
        <Link to={url} className="btn btn--primary mt-11">
          {urlTitle}
        </Link>
      ) : null}
    </Card>
  );
}

CallToAction.defaultProps = {
  url: "",
  urlTitle: "Learn more"
};

CallToAction.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string,
  urlTitle: PropTypes.string
};

export default CallToAction;
