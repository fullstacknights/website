import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import * as styles from "./page-highlight.module.css";

function PageHighlight({ header, subheader, url, urlTitle }) {
  let isExternalUrl = url.includes("https");

  return (
    <section className="py-7 px-2 bg-primary lg:py-10 lg:px-10">
      <div className="m-auto text-center w-11/12 max-w-6xl lg:w-10/12">
        <h3 className="text-h3 text-white font-extrabold mb-4">{header}</h3>
        <h4 className="text-h4 text-white mb-6">{subheader}</h4>
        {isExternalUrl ? (
          <a
            href={url}
            className={`btn btn--inverse ${styles.cta}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {urlTitle}
          </a>
        ) : (
          <Link className={`btn btn--inverse ${styles.cta}`} to={url}>
            {urlTitle}
          </Link>
        )}
      </div>
    </section>
  );
}

PageHighlight.propTypes = {
  header: PropTypes.string.isRequired,
  subheader: PropTypes.string.isRequired,
  url: PropTypes.string,
  urlTitle: PropTypes.string
};

export default PageHighlight;
