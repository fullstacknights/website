import React from "react";
import Form from "./form";

const additionalFormAttr = {
  "data-netlify": "true",
  method: "post"
};

function FeedbackForm() {
  return (
    <Form
      className={`flex flex-col rounded shadow w-full mb-4  p-6 lg:w-1/2`}
      additionalFormAttr={additionalFormAttr}
    >
      <input type="hidden" netlify-honeypot="bot-field" />
      <label htmlFor="subject" className="feedback__label">
        Subject
      </label>
      <input
        id="subject"
        name="subject"
        className="feedback__input"
        placeholder="Hello FSN!"
        type="text"
      />
      <label htmlFor="thoughts" className="feedback__label">
        Your thoughts
      </label>
      <textarea
        id="thoughts"
        name="thoughts"
        className="feedback__input"
        placeholder="It would be awesome if ..."
        rows="5"
        type="text"
      />
    </Form>
  );
}

export default FeedbackForm;
