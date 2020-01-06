import React from "react";
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
        <label htmlFor="title" className="feedback-form-labels">Title</label>
        <input id="title" className="feedback-form-inputs" placeholder="Hello FSN!" type="text" />
        <label htmlFor="thoughts" className="feedback-form-labels">Your thoughts</label>
        <textarea
          id="thoughts"
          className="feedback-form-inputs"
          placeholder="It would be awesome if ..."
          rows="5"
          type="text"
        />
      </div>
    </Form>
  );
}

export default FeedbackForm;
