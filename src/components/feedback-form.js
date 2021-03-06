import React from "react";
import { useTranslation } from "react-i18next";

import Form from "./form";

const additionalFormAttr = {
  "data-netlify": "true",
  method: "post"
};

function FeedbackForm() {
  const { t } = useTranslation();

  return (
    <Form
      className={`flex flex-col rounded shadow w-full mb-4  p-6 lg:w-1/2`}
      additionalFormAttr={additionalFormAttr}
      submitText={t("submit")}
    >
      <input type="hidden" netlify-honeypot="bot-field" />
      <label htmlFor="subject" className="feedback__label">
        {t("subject")}
      </label>
      <input
        id="subject"
        name="subject"
        className="feedback__input"
        placeholder={t("feedback.hello-fsn")}
        type="text"
      />
      <label htmlFor="thoughts" className="feedback__label">
        {t("your-thoughts")}
      </label>
      <textarea
        id="thoughts"
        name="thoughts"
        className="feedback__input"
        placeholder={t("feedback.it-would-be-awesome-if")}
        rows="5"
        type="text"
      />
    </Form>
  );
}

export default FeedbackForm;
