import React from "react";
import PropTypes from "prop-types";

function PageSection({ title, description, className, children }) {
  return (
    <section
      className={`w-11/12 m-auto mb-20 max-w-6xl ${className ? className : ""}`}
    >
      <div className="text-center">
        <h3 className="text-h3 font-extrabold mb-4">{title}</h3>
        <h4 className="text-h4 mb-10">{description}</h4>
      </div>
      {children}
    </section>
  );
}

PageSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default PageSection;
