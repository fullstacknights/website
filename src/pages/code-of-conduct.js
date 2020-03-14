import React from "react";
import { useTranslation } from "react-i18next";

import {
  Avatar,
  GradientBackground,
  Layout,
  PageSection,
  SEO
} from "../components/index.js";

import { ORGANIZERS } from "../constants";

export default function() {
  const { t } = useTranslation();

  return (
    <Layout>
      <SEO title="Code of Conduct" />
      <GradientBackground className="flex flex-col items-center justify-center text-center">
        <h2 className="text-h2 font-bold text-white">
          {t("code-of-conduct.section-title")}
        </h2>
      </GradientBackground>
      <PageSection
        title={t("code-of-conduct.short-version-title")}
        className="mt-20"
      >
        <div className="w-11/12 m-auto">
          <p className="text-rg">
            {t("code-of-conduct.short-version-description")}
          </p>
        </div>
      </PageSection>
      <PageSection title={t("code-of-conduct.long-version-title")}>
        <div className="w-11/12 m-auto">
          <p className="text-rg mb-6">
            {t("code-of-conduct.long-version-description-paragraph-1")}
          </p>
          <p className="text-rg mb-6">
            {t("code-of-conduct.long-version-description-paragraph-2")}
          </p>
          <p className="text-rg mb-6">
            {t("code-of-conduct.long-version-description-paragraph-3")}
          </p>
          <p className="text-rg mb-6">
            {t("code-of-conduct.long-version-description-paragraph-4")}
          </p>
          <p className="text-rg mb-6">
            {t("code-of-conduct.long-version-description-paragraph-5")}
          </p>
          <p className="text-rg mb-6">
            {t("code-of-conduct.long-version-description-paragraph-6")}
          </p>
          <p className="text-rg">
            {t("code-of-conduct.long-version-description-paragraph-7")}
          </p>
        </div>
      </PageSection>
      <PageSection
        title={t("code-of-conduct.need-help-title")}
        description={t("code-of-conduct.need-help-description")}
      >
        <div className="flex flex-wrap">
          {ORGANIZERS.map((organizer, index) => (
            <Avatar key={index} {...organizer} />
          ))}
        </div>
      </PageSection>
    </Layout>
  );
}
