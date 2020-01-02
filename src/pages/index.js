import React from "react";

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
          <h4 className="text-h4 text-white">
            A space for everyone to learn and share their knowledge about code
            and design.
          </h4>
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
        title="Be a part of our events"
        description="Our events are done by the community, for the community. Without your support and participation there would be no us."
      >
        <div className="flex flex-wrap justify-between lg:flex-no-wrap">
          <div className="flex flex-initial w-full mb-4 lg:w-1/3 lg:mr-4 lg:mb-0">
            <CallToAction
              title="Become a speaker"
              description="We're looking for people who are willing to share their experiences with the community through talks. You don't have to be an expert in order to be a speaker!"
              url="/speakers/"
            />
          </div>
          <div className="flex flex-initial  w-full mb-4 lg:w-1/3 lg:mr-4 lg:mb-0">
            <CallToAction
              title="Become a moderator"
              description="We're looking for people with knowledge about a particular topic that are willing to moderate a discussion around that topic."
              url="/topic-tables/"
            />
          </div>
          <div className="flex flex-initial w-full lg:w-1/3">
            <CallToAction
              title="Propose a topic"
              description="Interested in having a conversation about a particular topic, but don't feel you're the right fit to moderate or become a speaker? Send us your topic ideas any way, we'd love to see them!"
              url="/topic-tables/"
            />
          </div>
        </div>
      </PageSection>
      <PageSection
        title="Podcast"
        description="Listen to the founders of Fullstack Nights geek out about technology
        and events in the tech world in a relaxed environment."
      >
        <div className="flex flex-col items-center justify-center">
          <img className="w-1/2 lg:w-1/4" src={Podcast} alt="podcast" />
          <div className="mt-8 text-center">
            <h4 className="text-lg mb-2">Find us on:</h4>
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
      <PageSection title="Feedback" description="We weren't kidding about loving community. If you anything to tell us please use the form bellow. ❤️">
      <div className="flex flex-col items-center justify-center">
        <FeedbackForm />
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

export default IndexPage;
