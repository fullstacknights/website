import React from "react";
import { useTranslation } from "react-i18next";

import {
  Avatar,
  Layout,
  GradientBackground,
  PageSection,
  CallToAction,
  FAQList,
  PageHighlight,
  SEO
} from "../components/index";
import { SLACK_LINK } from "../constants";
import PAST_SPEAKERS from "../past-speakers";

const FORM_LINK = "https://forms.gle/tMo2Y5Bg8wktk21C7";

export default function() {
  const { t } = useTranslation();

  const FAQ = [
    {
      question: `${t("speakers.what-can-i-speak-about-question")}`,
      answer: `${t("speakers.what-can-i-speak-about-answer")}`
    },
    {
      question: `${t("speakers.how-much-time-do-i-have-question")}`,
      answer: `${t("speakers.how-much-time-do-i-have-answer")}`
    },
    {
      question: `${t("speakers.can-i-speak-about-new-tech-question")}`,
      answer: `${t("speakers.can-i-speak-about-new-tech-answer")}`
    },
    {
      question: `${t("speakers.can-i-recommend-someone-question")}`,
      answer: `${t("speakers.can-i-recommend-someone-answer")}`
    },
    {
      question: `${t("speakers.should-i-apply-question")}`,
      answer: `${t("speakers.should-i-apply-answer")}`
    },
    {
      question: `${t("speakers.who-should-attend-this-event-question")}`,
      answer: `${t("speakers.who-should-attend-this-event-answer")}`
    }
  ];

  return (
    <Layout>
      <SEO title="Become a speaker" />
      <GradientBackground className="flex flex-col items-center justify-center text-center">
        <h2 className="text-h2 font-bold text-white">
          {t("speakers.give-a-talk-at-fsn")}
        </h2>
        <h4 className="text-h4 text-white mb-8">
          {t("speakers.we-are-looking-for-speakers")}
        </h4>
        <a href={FORM_LINK} className="btn btn--primary mb-3">
          {t("speakers.submit-your-proposal")}
        </a>
      </GradientBackground>
      <PageSection
        className="mt-20"
        title={t("speakers.we-will-help-polish-your-talk")}
        description={t("speakers.everyone-has-valuable-knowledge-to-share")}
      >
        <div className="flex flex-wrap lg:flex-no-wrap">
          <div className="flex flex-initial w-full mb-4 lg:w-1/3 lg:mr-4 lg:mb-0">
            <CallToAction
              title={t("speakers.topic-scoping")}
              description={t("speakers.we-will-research-your-topic")}
            />
          </div>
          <div className="flex flex-initial w-full mb-4 lg:w-1/3 lg:mr-4 lg:mb-0">
            <CallToAction
              title={t("speakers.talk-rehearsal")}
              description={t("speakers.we-will-do-a-dry-run")}
            />
          </div>
          <div className="flex flex-initial w-full lg:w-1/3 lg:mr-4">
            <CallToAction
              title={t("speakers.slides-evaluation")}
              description={t("speakers.we-will-evaluate-the-content")}
            />
          </div>
        </div>
      </PageSection>
      <PageSection
        title={t("speakers.frequently-asked-questions")}
        description={t("speakers.we-have-gathered-a-couple-of-questions")}
      >
        <div className="flex justify-center">
          <div className="w-full lg:w-10/12">
            <FAQList list={FAQ} />
          </div>
        </div>
      </PageSection>
      <PageSection title={t("speakers.past-speakers")}>
        <div className="flex flex-wrap">
          {PAST_SPEAKERS.map((speaker, index) => (
            <Avatar key={index} name={speaker.name} img={speaker.img} />
          ))}
        </div>
        <div class="text-center mt-6">
          <h4 className="text-h4 font-semibold mb-4">
            {t("speakers.ready-to-become-a-speaker")}
          </h4>
          <a href={FORM_LINK} className="btn btn--primary mb-3">
            {t("speakers.submit-your-proposal")}
          </a>
        </div>
      </PageSection>
      <PageHighlight
        header={t("speakers.join-the-community")}
        subheader={t("speakers.ask-questions-get-help")}
        url={SLACK_LINK}
        urlTitle={t("join-us")}
      />
    </Layout>
  );
}
