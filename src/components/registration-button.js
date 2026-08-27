import React from "react";
import { useTranslation } from "react-i18next";

function RegistrationButton({ url }) {
  const { t } = useTranslation();

  return (
    <a
      className="btn btn--primary w-1/2 lg:w-2/12"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {t("get-tickets")}
    </a>
  );
}

export default RegistrationButton;
