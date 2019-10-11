import React from "react";
import PropTypes from "prop-types";

function PageHighlight({ header, subheader, url, urlTitle }) {
  return (
    <section className="p-10 bg-primary">
      <div className="m-auto text-center w-10/12">
        <h3 className="text-h3 text-white font-extrabold mb-4">{header}</h3>
        <h4 className="text-h4 text-white mb-6">{subheader}</h4>
        <a href={url} className="btn btn--inverse">
          {urlTitle}
        </a>
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
