import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import Card from "./card";
import styles from "./call-to-action.module.css";

function Division() {
  return <div className={`my-3 bg-primary ${styles.division}`}></div>;
}

function CallToAction({ title, description, url }) {
  return (
    <Card>
      <h4 className="text-h4 font-extrabold">{title}</h4>
      <Division />
      <p className="text-lg text-center">{description}</p>
      {url ? (
        <Link to={url} className="btn btn--primary mt-11">
          Learn more
        </Link>
      ) : null}
    </Card>
  );
}

CallToAction.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string
};

export default CallToAction;
