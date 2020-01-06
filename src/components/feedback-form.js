import React from "react";
import PropTypes from "prop-types";
import Form from "./form";

const additionalFormAttr = {
  "data-netlify": "true",
  method: "post"
}

function FeedbackForm() {

  return (
    <Form
      className={`flex flex-col rounded shadow w-full mb-4  p-6 lg:w-1/2`}
      additionalFormAttr={additionalFormAttr}
    >
      <div>
        <input type="hidden" netlify-honeypot="bot-field"/>
        <label>
          Title:
          <input className="w-full p6 shadow rounded p-1 mb-3" placeholder="Hell FSN!" type="text" />
        </label>
        <label>
          Your thoughts:
          <textarea className="w-full p6 shadow rounded p-1 mb-3" placeholder="It would be awesome if ..." rows="5" type="text" />
        </label>
      </div>
    </Form>
  );
}

export default FeedbackForm;
