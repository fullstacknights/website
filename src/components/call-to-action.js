import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import Card from "./card";
import styles from "./call-to-action.module.css";

function Division() {
  return <div className={`mt-3 bg-primary ${styles.division}`}></div>;
}

function CallToAction({ title, description, url, urlTitle }) {
  const isExternalLink = url.includes("https");

  return (
    <Card className="justify-between items-center p-6">
      <div className="flex flex-col justify-center items-center">
        <h4 className="text-h4 text-center font-extrabold">{title}</h4>
        <Division />
        <p className="mt-5 text-rg text-center">{description}</p>
      </div>
      {isExternalLink && url ? (
        <a className="btn btn--primary mt-5" href={url} target="_blank">
          {urlTitle}
        </a>
      ) : null}
      {!isExternalLink && url ? (
        <Link to={url} className="btn btn--primary mt-5">
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
