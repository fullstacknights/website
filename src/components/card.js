import React from "react";
import PropTypes from "prop-types";

function Card({ children, className, variant }) {
  const backgroundColor = variant === "dark" ? "bg-gradient" : "bg-white";

  return (
    <div
      className={`flex flex-col items-center p-6 rounded shadow ${className} ${backgroundColor}`}
    >
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  className: PropTypes.string,
  variant: PropTypes.oneOf(["dark", "white"])
};

export default Card;
