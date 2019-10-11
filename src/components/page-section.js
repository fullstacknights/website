import React from "react";
import PropTypes from "prop-types";

function PageSection({ title, description, children }) {
  return (
    <section className="w-11/12 m-auto mb-20">
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
  description: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default PageSection;
