import React from "react";
import { useTranslation } from "react-i18next";

import PageSection from "./page-section";

// Hidden unless an active event defines `event.sponsors`.
function Sponsors({ sponsors = [] }) {
  const { t } = useTranslation();

  if (sponsors.length === 0) {
    return null;
  }

  return (
    <PageSection
      title={t("sponsors.title")}
      description={t("sponsors.thanks-to-our-sponsors")}
    >
      <div className="flex flex-wrap items-center justify-center">
        {sponsors.map((sponsor, index) => {
          const logo = (
            <img
              className="max-h-20 m-6"
              src={sponsor.logo}
              alt={sponsor.name}
            />
          );

          return sponsor.url ? (
            <a
              key={index}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {logo}
            </a>
          ) : (
            <div key={index}>{logo}</div>
          );
        })}
      </div>
    </PageSection>
  );
}

export default Sponsors;
