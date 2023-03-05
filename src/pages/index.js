import React from "react";
import { useTranslation } from "react-i18next";

import {
  SEO,
  Layout,
  PageSection,
  CallToAction,
  PageHighlight,
  UpcomingEvent,
  GradientBackground,
  FeedbackForm
} from "../components/index";

import ApplePodcasts from "../assets/apple-podcasts.inline.svg";
import Podcast from "../assets/podcast.svg";
import RSS from "../assets/rss.inline.svg";
import { SLACK_LINK } from "../constants";
import CONFIG from "../config";

function IndexPage() {
  const { activeEvent, event } = CONFIG;

  const { t, i18n } = useTranslation();

  return (
    <Layout>
      <SEO title="Home" />
      <GradientBackground
        className={`flex flex-col items-center justify-center pt-13 ${
          activeEvent ? "lg:block" : "mb-20"
        }`}
      >
        <div
          className={`-mt-13 text-center ${
            activeEvent ? "lg:mb-8 lg:mt-18" : ""
          }`}
        >
          <h2 className="text-h2 font-bold text-white">Fullstack Nights</h2>
          <h4 className="text-h4 text-white">{t("motto")}</h4>
        </div>
      </GradientBackground>
      {activeEvent ? (
        <UpcomingEvent
          type={event.type}
          date={event.date}
          venue={event.venue}
          participants={event.participants}
        />
      ) : null}
      <PageSection
        title={t("main-page.be-a-part-of-our-events")}
        description={t("main-page.our-events-are-done-by-the-community")}
      >
        <div className="flex flex-wrap justify-between lg:flex-nowrap">
          <div className="flex flex-initial w-full mb-4 lg:w-1/3 lg:mr-4 lg:mb-0">
            <CallToAction
              title={t("main-page.become-a-speaker")}
              description={t("main-page.we-are-looking-for-speakers")}
              url="/speakers/"
              urlTitle={t("learn-more")}
            />
          </div>
          <div className="flex flex-initial  w-full mb-4 lg:w-1/3 lg:mr-4 lg:mb-0">
            <CallToAction
              title={t("main-page.become-a-moderator")}
              description={t("main-page.we-are-looking-for-moderators")}
              url="/topic-tables/"
              urlTitle={t("learn-more")}
            />
          </div>
          <div className="flex flex-initial w-full lg:w-1/3">
            <CallToAction
              title={t("proposal.propose-a-topic")}
              description={t("proposal.interested-in-topic")}
              url="/topic-tables/"
              urlTitle={t("learn-more")}
            />
          </div>
        </div>
      </PageSection>
      <PageSection
        title="Podcast"
        description={t("podcast.listen-to-the-founders")}
      >
        <div className="flex flex-col items-center justify-center">
          <img className="w-1/2 lg:w-1/4" src={Podcast} alt="podcast" />
          <div className="mt-8 text-center">
            <h4 className="text-lg mb-2">{t("find-us")}:</h4>
            <div className="flex flex-wrap justify-center lg:justify-start">
              <a
                className="btn btn--apple-podcasts"
                href="https://podcasts.apple.com/us/podcast/fullstack-nights-podcast/id1388196921"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex flex-row items-center">
                  <ApplePodcasts className="mr-2" />
                  Apple Podcasts
                </div>
              </a>
              <a
                class="btn btn--rss"
                href="https://anchor.fm/s/45a52cc/podcast/rss"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex flex-row items-center">
                  <RSS className="mr-2" />
                  RSS Feed
                </div>
              </a>
            </div>
          </div>
        </div>
      </PageSection>
      <PageSection
        title="Feedback"
        description={t("feedback.if-you-have-anything-to-tell-us")}
      >
        <div className="flex flex-col items-center justify-center">
          <FeedbackForm i18n={i18n} />
        </div>
      </PageSection>
      <PageHighlight
        header={t("main-page.join-the-community")}
        subheader={t("main-page.ask-questions-get-help")}
        url={SLACK_LINK}
        urlTitle={t("join-us")}
      />
    </Layout>
  );
}

export default IndexPage;
