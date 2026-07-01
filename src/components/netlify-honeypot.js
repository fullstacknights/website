import React from "react";
import { useTranslation } from "react-i18next";

// Shared Netlify form plumbing: the hidden form-name (must match the <form>'s
// name) plus the honeypot field that traps bots. Used by every Netlify form.
function NetlifyHoneypot({ formName }) {
  const { t } = useTranslation();

  return (
    <>
      <input type="hidden" name="form-name" value={formName} />
      <p className="hidden">
        <label>
          {t("submission.bot-field")}
          <input name="bot-field" />
        </label>
      </p>
    </>
  );
}

export default NetlifyHoneypot;
