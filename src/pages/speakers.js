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

const FORM_LINK =
  "https://docs.google.com/forms/d/1SIL9HvzaQ34F3iHIIsMmDlS5Icoc9XPXTwrsr9_M87U/edit?ts=57ff9dee";

export default function() {
  const { t } = useTranslation();

  const FAQ = [
    {
      question: `${t("faq.what-can-i-speak-about-question")}`,
      answer: `${t("faq.what-can-i-speak-about-answer")}`
    },
    {
      question: `${t("faq.how-much-time-do-i-have-question")}`,
      answer: `${t("faq.how-much-time-do-i-have-answer")}`
    },
    {
      question: `${t("faq.can-i-speak-about-new-tech-question")}`,
      answer: `${t("faq.can-i-speak-about-new-tech-answer")}`
    },
    {
      question: `${t("faq.can-i-recommend-someone-question")}`,
      answer: `${t("faq.can-i-recommend-someone-answer")}`
    },
    {
      question: `${t("faq.should-i-apply-question")}`,
      answer: `${t("faq.should-i-apply-answer")}`
    },
    {
      question: `${t("faq.who-should-attend-this-event-question")}`,
      answer: `${t("faq.who-should-attend-this-event-answer")}`
    }
  ];

  return (
    <Layout>
      <SEO title="Become a speaker" />
      <GradientBackground className="flex flex-col items-center justify-center text-center">
        <h2 className="text-h2 font-bold text-white">Give a talk at FSN!</h2>
        <h4 className="text-h4 text-white mb-8">
          We're looking for people that are willing to share their experience
          with the community!
        </h4>
        <a href={FORM_LINK} className="btn btn--primary mb-3">
          Submit your proposal
        </a>
      </GradientBackground>
      <PageSection
        className="mt-20"
        title="We'll help you polish your talk"
        description="Everyone has valuable knowledge to share and we are committed to help you give a top-quality talk. Before the event we'll go through the following process:"
      >
        <div className="flex flex-wrap lg:flex-no-wrap">
          <div className="flex flex-initial w-full mb-4 lg:w-1/3 lg:mr-4 lg:mb-0">
            <CallToAction
              title="Topic scoping"
              description="Before you're selected as a speaker we will research your topic. If our team finds your topic to be too broad we'll discuss different ways to narrow it down."
            />
          </div>
          <div className="flex flex-initial w-full mb-4 lg:w-1/3 lg:mr-4 lg:mb-0">
            <CallToAction
              title="Talk rehearsal"
              description="Two weeks before the event we'll do a dry run of your talk. We'll provide feedback about your talk structure, delivery and the time you consumed presenting."
            />
          </div>
          <div className="flex flex-initial w-full lg:w-1/3 lg:mr-4">
            <CallToAction
              title="Slides evaluation"
              description="During the dry run we'll evaluate the content in your slides and give you pointers that will help improve the visual aspect of your talk."
            />
          </div>
        </div>
      </PageSection>
      <PageSection
        title="Frequently Asked Questions"
        description="We’ve gathered a couple of questions that are frequently asked by people. Feel free to check them out and if you have other question reach out on Facebook or Twitter."
      >
        <div className="flex justify-center">
          <div className="w-full lg:w-10/12">
            <FAQList list={FAQ} />
          </div>
        </div>
      </PageSection>
      <PageSection title="Past Fullstack Nights Speakers">
        <div className="flex flex-wrap">
          {PAST_SPEAKERS.map((speaker, index) => (
            <Avatar key={index} name={speaker.name} img={speaker.img} />
          ))}
        </div>
        <div class="text-center mt-6">
          <h4 className="text-h4 font-semibold mb-4">
            Ready to become a speaker?
          </h4>
          <a href={FORM_LINK} className="btn btn--primary mb-3">
            Submit your proposal
          </a>
        </div>
      </PageSection>
      <PageHighlight
        header="Join the community in Slack"
        subheader="Ask questions, get help from the community and stay up to date with the latest events."
        url={SLACK_LINK}
        urlTitle="Join us"
      />
    </Layout>
  );
}
