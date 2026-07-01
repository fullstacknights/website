import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const FORM_NAME = "speaker-submission";

function encode(data) {
  return new URLSearchParams(data).toString();
}

function Radio({ name, value, label, required, onChange }) {
  return (
    <label className="flex items-center mb-2 cursor-pointer">
      <input
        type="radio"
        name={name}
        value={value}
        required={required}
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
  const [status, setStatus] = useState("idle");

  function handleSubmit(event) {
    event.preventDefault();
    setStatus("submitting");
    const data = new FormData(event.target);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(data)
    })
      .then((response) => {
        if (!response.ok) throw new Error(response.statusText);
        setStatus("success");
      })
      .catch(() => setStatus("error"));
  }

  if (status === "success") {
    return (
      <div className="flex flex-col rounded shadow bg-white w-full p-6 text-center lg:w-1/2">
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
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <p className="hidden">
        <label>
          {t("submission.bot-field")}
          <input name="bot-field" />
        </label>
      </p>

      <p className="text-rg text-primary mb-4">* {t("submission.required")}</p>

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
          onChange={(e) => setArea(e.target.value)}
        />
        <Radio
          name="topic-area"
          value="Code"
          label={t("submission.topic-area-code")}
          required
          onChange={(e) => setArea(e.target.value)}
        />
        <Radio
          name="topic-area"
          value="Other"
          label={t("submission.topic-area-other")}
          required
          onChange={(e) => setArea(e.target.value)}
        />
        {area === "Other" && (
          <input
            name="topic-area-other"
            type="text"
            required
            placeholder={t("submission.topic-area-other-placeholder")}
            className="feedback__input mt-2"
          />
        )}
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

      <fieldset className="mb-3">
        <legend className="feedback__label">{t("submission.intent")} *</legend>
        <Radio
          name="intent"
          value="Present a talk"
          label={t("submission.intent-talk")}
          required
        />
        <Radio
          name="intent"
          value="Host a topic table"
          label={t("submission.intent-topic-table")}
          required
        />
      </fieldset>

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
        <p className="text-rg text-primary mb-3">{t("submission.error")}</p>
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
