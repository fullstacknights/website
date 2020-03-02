import React from "react";
import PropTypes from "prop-types";

function Form({
  children,
  className,
  variant,
  additionalFormAttr,
  submitText = "Submit"
}) {
  const backgroundColor = variant === "dark" ? "bg-gradient" : "bg-white";

  return (
    <form
      className={`flex flex-col rounded shadow ${className} ${backgroundColor}`}
      {...additionalFormAttr}
    >
      {children}
      <button className="btn btn--primary mt-2" type="submit">
        {submitText}
      </button>
    </form>
  );
}

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  className: PropTypes.string,
  variant: PropTypes.oneOf(["dark", "white"]),
  additionalFormAttr: PropTypes.object
};

export default Form;
