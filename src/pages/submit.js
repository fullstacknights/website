import React from "react";
import { useTranslation } from "react-i18next";

import {
  Layout,
  GradientBackground,
  SubmissionForm,
  SEO
} from "../components/index";

export default function Submit() {
  const { t } = useTranslation();

  return (
    <Layout>
      <GradientBackground className="flex flex-col items-center justify-center text-center px-2">
        <h2 className="text-h2 font-bold text-white">
          {t("submission.title")}
        </h2>
        <h4 className="text-h4 text-white">{t("submission.subtitle")}</h4>
      </GradientBackground>
      <div className="flex justify-center w-11/12 m-auto mt-20 mb-20">
        <SubmissionForm />
      </div>
    </Layout>
  );
}

export const Head = () => <SEO title="Submit your topic" />;
