import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import NetlifyHoneypot from "./netlify-honeypot";

const FORM_NAME = "speaker-submission";

// Maps the ?type= query param (set by each page's CTA) to a pre-selected intent.
const INTENT_BY_TYPE = {
  talk: "Present a talk",
  table: "Host a topic table",
  propose: "Propose a topic"
};

function Radio({ name, value, label, required, checked, onChange }) {
  return (
    <label className="flex items-center mb-2 cursor-pointer">
      <input
        type="radio"
        name={name}
        value={value}
        required={required}
        checked={checked}
        onChange={onChange}
        className="mr-2"
      />
      {label}
    </label>
  );
}

function SubmissionForm() {
  const { t } = useTranslation();
  const [area, setArea] = useState("");
  const [intent, setIntent] = useState("");
  const [status, setStatus] = useState("idle");
  const successRef = useRef(null);

  // Move focus to the confirmation so screen-reader users are told the outcome.
  useEffect(() => {
    if (status === "success" && successRef.current) {
      successRef.current.focus();
    }
  }, [status]);

  // Pre-select the intent based on which CTA the visitor arrived from. Done in
  // an effect (not initial state) so it doesn't fight server-side hydration.
  useEffect(() => {
    const type = new URLSearchParams(window.location.search).get("type");
    if (INTENT_BY_TYPE[type]) setIntent(INTENT_BY_TYPE[type]);
  }, []);

  const onAreaChange = (event) => setArea(event.target.value);
  const onIntentChange = (event) => setIntent(event.target.value);

  function handleSubmit(event) {
    event.preventDefault();
    setStatus("submitting");

    fetch("/", { method: "POST", body: new URLSearchParams(new FormData(event.target)) })
      .then((response) => {
        if (!response.ok) throw new Error(response.statusText);
        setStatus("success");
      })
      .catch(() => setStatus("error"));
  }

  if (status === "success") {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        aria-live="polite"
        className="flex flex-col rounded shadow bg-white w-full p-6 text-center lg:w-1/2"
      >
        <h4 className="text-h4 font-extrabold mb-4">
          {t("submission.thank-you-title")}
        </h4>
        <p className="text-rg">{t("submission.thank-you-body")}</p>
      </div>
    );
  }

  return (
    <form
      name={FORM_NAME}
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="flex flex-col rounded shadow bg-white w-full mb-4 p-6 lg:w-1/2"
    >
      <NetlifyHoneypot formName={FORM_NAME} />

      <p className="text-rg text-primary mb-4">* {t("submission.required")}</p>

      <fieldset className="mb-3">
        <legend className="feedback__label">{t("submission.intent")} *</legend>
        <Radio
          name="intent"
          value="Present a talk"
          label={t("submission.intent-talk")}
          required
          checked={intent === "Present a talk"}
          onChange={onIntentChange}
        />
        <Radio
          name="intent"
          value="Host a topic table"
          label={t("submission.intent-topic-table")}
          required
          checked={intent === "Host a topic table"}
          onChange={onIntentChange}
        />
        <Radio
          name="intent"
          value="Propose a topic"
          label={t("submission.intent-propose")}
          required
          checked={intent === "Propose a topic"}
          onChange={onIntentChange}
        />
      </fieldset>

      <label htmlFor="name" className="feedback__label">
        {t("submission.name")} *
      </label>
      <input
        id="name"
        name="name"
        type="text"
        required
        className="feedback__input"
      />

      <label htmlFor="email" className="feedback__label">
        {t("submission.email")} *
      </label>
      <input
        id="email"
        name="email"
        type="email"
        required
        className="feedback__input"
      />

      <fieldset className="mb-3">
        <legend className="feedback__label">
          {t("submission.topic-area")} *
        </legend>
        <Radio
          name="topic-area"
          value="Design"
          label={t("submission.topic-area-design")}
          required
          onChange={onAreaChange}
        />
        <Radio
          name="topic-area"
          value="Code"
          label={t("submission.topic-area-code")}
          required
          onChange={onAreaChange}
        />
        <Radio
          name="topic-area"
          value="Other"
          label={t("submission.topic-area-other")}
          required
          onChange={onAreaChange}
        />
        <input
          name="topic-area-other"
          type="text"
          required={area === "Other"}
          placeholder={t("submission.topic-area-other-placeholder")}
          className={`feedback__input mt-2 ${area === "Other" ? "" : "hidden"}`}
        />
      </fieldset>

      <label htmlFor="description" className="feedback__label">
        {t("submission.description")} *
      </label>
      <textarea
        id="description"
        name="description"
        rows="4"
        required
        className="feedback__input"
      />

      <label htmlFor="on-behalf-email" className="feedback__label">
        {t("submission.on-behalf")}
      </label>
      <input
        id="on-behalf-email"
        name="on-behalf-email"
        type="email"
        placeholder={t("submission.on-behalf-placeholder")}
        className="feedback__input"
      />

      {status === "error" && (
        <p role="alert" className="text-rg text-primary mb-3">
          {t("submission.error")}
        </p>
      )}

      <button
        className="btn btn--primary mt-2"
        type="submit"
        disabled={status === "submitting"}
      >
        {t("submit")}
      </button>
    </form>
  );
}

export default SubmissionForm;
