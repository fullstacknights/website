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
            A space for people to share their knowledge about code and design.
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
        description="Our events are done by the community for the community. Without you there would be no us."
      >
        <div className="flex flex-wrap justify-between lg:flex-no-wrap">
          <div className="flex flex-initial w-full mb-4 lg:w-1/3 lg:mr-4 lg:mb-0">
            <CallToAction
              title="Become a speaker"
              description="We're looking for people who are willing to share their experiences with the community through talks. Speakers can be experts or people learning about a topic. If you're interested in sharing your experience building, designing, or programming let us know!"
              url="/become-a-speaker/"
            />
          </div>
          <div className="flex flex-initial  w-full mb-4 lg:w-1/3 lg:mr-4 lg:mb-0">
            <CallToAction
              title="Become a moderator"
              description="We're looking for knowledgeable people that are willing to moderate a discussion. As a moderator you will help establish and move a topic along. The goal is for everyone to learn and share their experience through conversations."
              url="/become-a-moderator/"
            />
          </div>
          <div className="flex flex-initial w-full lg:w-1/3">
            <CallToAction
              title="Propose a topic"
              description="Interested in having a conversation about a particular topic but you don't feel confident to moderate a table or give a presentation? Don't worry, you can propose your topic and we'll try to find someone who's willing to share their knowledge and moderate a table."
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
