import React from "react";
// import Form from "./form";
import styles from "./call-to-action.module.css";
import PropTypes from "prop-types";
import Form from "./form";


function FeedbackForm() {

  const additionalFormAttr = {
    "data-netlify": "true",
    method: "post"
  }
  return (
    <Form
      className={`flex flex-col rounded shadow w-full mb-4 lg:w-1/2 lg:mr-4 p-6`}
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
