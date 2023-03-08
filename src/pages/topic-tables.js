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
import MODERATORS from "../past-moderators";

const FORM_LINK = "https://forms.gle/tMo2Y5Bg8wktk21C7";

export default function TopicTables() {
  const { t } = useTranslation();

  const FAQ = [
    {
      question: `${t("topic-tables.what-are-topic-tables-question")}`,
      answer: `${t("topic-tables.what-are-topic-tables-answer")}`
    },
    {
      question: `${t("topic-tables.who-should-attend-question")}`,
      answer: `${t("topic-tables.who-should-attend-answer")}`
    }
  ];

  return (
    <Layout>
      <SEO title="Become a moderator" />
      <GradientBackground className="flex flex-col items-center justify-center pt-13 lg:block">
        <div className="flex flex-col text-center lg:mt-18">
          <h2 className="text-h2 font-bold text-white">
            {t("topic-tables.chat-with-the-community")}
          </h2>
          <h4 className="text-h4 text-white mb-8">
            {t("topic-tables.we-are-looking-for-people-willing-to-share")}
          </h4>
        </div>
      </GradientBackground>
      <div className="w-11/12 m-auto mb-20 mt-20 lg:w-2/3 lg:-mt-52 max-w-6xl">
        <div className="flex flex-wrap lg:flex-nowrap">
          <div className="flex flex-initial w-full mb-4 lg:w-1/2 lg:mr-4 lg:mb-0">
            <CallToAction
              title={t("topic-tables.moderator")}
              description={t("topic-tables.want-to-propose-a-topic")}
              url={FORM_LINK}
              urlTitle={t("topic-tables.apply")}
            />
          </div>
          <div className="flex flex-initial w-full lg:w-1/2">
            <CallToAction
              title={t("topic-tables.topic")}
              description={t(
                "topic-tables.interested-in-having-a-conversation"
              )}
              url={FORM_LINK}
              urlTitle={t("topic-tables.propose")}
            />
          </div>
        </div>
      </div>
      <PageSection
        title={t("topic-tables.frequently-asked-questions")}
        description={t("topic-tables.we-have-gathered-a-couple-of-questions")}
      >
        <div className="flex justify-center">
          <div className="w-full lg:w-10/12">
            <FAQList list={FAQ} />
          </div>
        </div>
      </PageSection>
      <PageSection title={t("topic-tables.past-moderators")}>
        <div className="flex flex-wrap">
          {MODERATORS.map((moderator, index) => (
            <Avatar key={index} name={moderator.name} img={moderator.img} />
          ))}
        </div>
      </PageSection>
      <PageHighlight
        header={t("topic-tables.still-have-questions")}
        subheader={t("topic-tables.let-us-know-if-you-have-questions")}
        url={SLACK_LINK}
        urlTitle={t("topic-tables.contact-us")}
      />
    </Layout>
  );
}
