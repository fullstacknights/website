import React from "react";

import {
  SEO,
  Image,
  Layout,
  PageSection,
  CallToAction,
  PageHighlight,
  UpcomingEvent,
  GradientBackground
} from "../components/index";

import ApplePodcasts from "../assets/apple-podcasts.svg";
import { SLACK_LINK } from "../constants";
import RSS from "../assets/rss.svg";
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
              description="We're looking for people who are willing to share their experiences with the community through talks. You don't have to be an expert in order to be a speaker! If you are passionate about a particular topic and would like to share it, you're welcome to submit a talk. Either way, we'll help by providing feedback along the way."
              url="/become-a-speaker/"
            />
          </div>
          <div className="flex flex-initial  w-full mb-4 lg:w-1/3 lg:mr-4 lg:mb-0">
            <CallToAction
              title="Become a moderator"
              description="We're looking for people with knowledge about a particular topic that are willing to moderate a discussion around that topic. The goal is for beginners and experts alike to learn and share their experience through conversations."
              url="/become-a-moderator/"
            />
          </div>
          <div className="flex flex-initial w-full lg:w-1/3">
            <CallToAction
              title="Propose a topic"
              description="Interested in having a conversation about a particular topic, but don't feel you're the right fit to moderate or become a speaker? Send us your topic ideas and we'll try to find someone interested in sharing their knowledge on your suggested topic!"
              url="/become-a-moderator/"
            />
          </div>
        </div>
      </PageSection>
      <div className="flex flex-wrap justify-between m-auto mb-20 w-11/12 lg:flex-no-wrap max-w-6xl">
        <div className="w-full text-center lg:w-1/2 lg:text-left">
          <h3 className="text-h3 font-extrabold mb-8">Podcast</h3>
          <h4 className="text-h4">
            Listen to the founders of Fullstack Nights geek out about technology
            and events in the tech world in a relaxed environment.
          </h4>
          <div className="mt-8">
            <h4 className="text-h4">Find on:</h4>
            <div className="flex justify-center lg:justify-start">
              <img
                className="h-8 w-8 mr-3"
                src={ApplePodcasts}
                alt="Apple podcasts logo"
              />
              <img className="h-8 w-8" src={RSS} alt="RSS logo" />
            </div>
          </div>
        </div>
        <div className="w-full mt-8 lg:w-1/2 lg:mt-0">
          <Image />
        </div>
      </div>
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
