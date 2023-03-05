import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import Card from "./card";
import * as styles from "./call-to-action.module.css";

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
      {!url ? null : isExternalLink ? (
        <a
          className="btn btn--primary mt-5 w-1/2"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {urlTitle}
        </a>
      ) : (
        <Link to={url} className="btn btn--primary mt-5 w-1/2">
          {urlTitle}
        </Link>
      )}
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
