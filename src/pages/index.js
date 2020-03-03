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
        title={t("main-page.main-title")}
        description={t("main-page.main-description")}
      >
        <div className="flex flex-wrap justify-between lg:flex-no-wrap">
          <div className="flex flex-initial w-full mb-4 lg:w-1/3 lg:mr-4 lg:mb-0">
            <CallToAction
              title={t("speakers.call-to-action-title")}
              description={t("speakers.call-to-action-description")}
              url="/speakers/"
              urlTitle={t("learn-more-text")}
            />
          </div>
          <div className="flex flex-initial  w-full mb-4 lg:w-1/3 lg:mr-4 lg:mb-0">
            <CallToAction
              title={t("moderator.call-to-action-title")}
              description={t("moderator.call-to-action-description")}
              url="/topic-tables/"
              urlTitle={t("learn-more-text")}
            />
          </div>
          <div className="flex flex-initial w-full lg:w-1/3">
            <CallToAction
              title={t("proposal.call-to-action-title")}
              description={t("proposal.call-to-action-description")}
              url="/topic-tables/"
              urlTitle={t("learn-more-text")}
            />
          </div>
        </div>
      </PageSection>
      <PageSection
        title="Podcast"
        description={t("podcast.section-description")}
      >
        <div className="flex flex-col items-center justify-center">
          <img className="w-1/2 lg:w-1/4" src={Podcast} alt="podcast" />
          <div className="mt-8 text-center">
            <h4 className="text-lg mb-2">{t("find-us-text")}:</h4>
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
              <button class="btn btn--rss">
                <div className="flex flex-row items-center">
                  <RSS className="mr-2" />
                  RSS Feed
                </div>
              </button>
            </div>
          </div>
        </div>
      </PageSection>
      <PageSection
        title="Feedback"
        description={t("feedback.call-to-action-description")}
      >
        <div className="flex flex-col items-center justify-center">
          <FeedbackForm i18n={i18n} />
        </div>
      </PageSection>
      <PageHighlight
        header={t("main-page.slack-title")}
        subheader={t("main-page.slack-description")}
        url={SLACK_LINK}
        urlTitle={t("join-us-text")}
      />
    </Layout>
  );
}

export default IndexPage;
