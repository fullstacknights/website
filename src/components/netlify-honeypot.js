import React from "react";
import { useTranslation } from "react-i18next";

// formName must match the <form>'s name attribute.
function NetlifyHoneypot({ formName }) {
  const { t } = useTranslation();

  return (
    <>
      <input type="hidden" name="form-name" value={formName} />
      <p className="hidden">
        <label>
          {t("submission.bot-field")}
          <input name="bot-field" type="text" />
        </label>
      </p>
    </>
  );
}

export default NetlifyHoneypot;
