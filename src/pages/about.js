import React from "react";
import { useTranslation } from "react-i18next";

import {
  Avatar,
  GradientBackground,
  Layout,
  PageSection,
  PageHighlight,
  SEO
} from "../components/index.js";
import { ORGANIZERS, FOUNDERS } from "../constants";

export default function() {
  const { t } = useTranslation();

  const QUESTIONS = [
    {
      question: `${t("about.what-is-fsn-question")}`,
      answer: `${t("about.what-is-fsn-answer")}`
    },
    {
      question: `${t("about.what-is-the-format-question")}`,
      answer: `${t("about.what-is-the-format-answer-line-1")}\n
      ${t("about.what-is-the-format-answer-line-2")}\n
      ${t("about.what-is-the-format-answer-line-3")}`
    },
    {
      question: `${t("about.who-should-attend-question")}`,
      answer: `${t("about.who-should-attend-answer")}`
    },
    {
      question: `${t("about.why-are-we-doing-this-question")}`,
      answer: `${t("about.why-are-we-doing-this-answer-line-1")}\n
      ${t("about.why-are-we-doing-this-answer-line-2")}`
    },
    {
      question: `${t("about.how-can-i-get-involved-question")}`,
      answer: `${t("about.how-can-i-get-involved-answer")}`
    }
  ];

  return (
    <Layout>
      <SEO title="About" />
      <GradientBackground className="flex flex-col items-center justify-center text-center px-2">
        <h2 className="text-h2 font-bold text-white">{t("about.title")}</h2>
        <h4 className="text-h4 text-white">{t("about.text")}</h4>
      </GradientBackground>
      <PageSection title={t("about.questions-title")} className="mt-20">
        <div className="m-auto w-11/12">
          {QUESTIONS.map(question => (
            <div className="mb-6">
              <h4 className="text-h4 font-extrabold mb-4">
                {question.question}
              </h4>
              <p className="text-rg whitespace-pre-line">{question.answer}</p>
            </div>
          ))}
        </div>
      </PageSection>
      <PageSection title={t("about.event-organizers-text")}>
        <div className="flex flex-wrap">
          {ORGANIZERS.map((organizer, index) => (
            <Avatar key={index} {...organizer} />
          ))}
        </div>
      </PageSection>
      <PageSection title={t("about.founders-text")}>
        <div className="flex flex-wrap">
          {FOUNDERS.map((founder, index) => (
            <Avatar key={index} {...founder} />
          ))}
        </div>
      </PageSection>
      <PageHighlight
        header={t("about.code-of-conduct-title")}
        subheader={t("about.code-of-conduct-description")}
        url="/code-of-conduct"
        urlTitle={t("about.code-of-conduct-text")}
      />
    </Layout>
  );
}
