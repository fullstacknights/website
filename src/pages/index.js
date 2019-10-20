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

import RSS from "../assets/rss.svg";
import ApplePodcasts from "../assets/apple-podcasts.svg";
import { SLACK_LINK } from "../constants";

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <GradientBackground>
        <div className="flex flex-col items-center justify-center h-full py-6 px-4 -mt-13 text-center md:block md:mb-8 md:mt-12">
          <h2 className="text-h2 font-bold text-white">Fullstack Nights</h2>
          <h4 className="text-h4 text-white">
            Charlas sobre technología y diseño en un ambiente informal
          </h4>
        </div>
      </GradientBackground>
      <UpcomingEvent />
      <PageSection
        title="Be a part of our events"
        description="The Fullstack Nights events are done by the community for the
    community. Without your participation we cannot keep these events
    going."
      >
        <div className="flex flex-wrap md:flex-no-wrap justify-between">
          <div className="w-full mb-4 md:w-1/3 md:mr-4 md:mb-0">
            <CallToAction
              title="Become a speaker"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A cum, ullam nisi optio soluta laboriosam eum dignissimos assumenda animi alias. Consectetur architecto repudiandae quidem, ea vitae rerum corrupti dolor expedita."
              url="/become-a-speaker/"
            />
          </div>
          <div className="w-full mb-4 md:w-1/3 md:mr-4 md:mb-0">
            <CallToAction
              title="Become a moderator"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A cum, ullam nisi optio soluta laboriosam eum dignissimos assumenda animi alias. Consectetur architecto repudiandae quidem, ea vitae rerum corrupti dolor expedita."
              url="/become-a-moderator/"
            />
          </div>
          <div className="w-full md:w-1/3">
            <CallToAction
              title="Propose a topic"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A cum, ullam nisi optio soluta laboriosam eum dignissimos assumenda animi alias. Consectetur architecto repudiandae quidem, ea vitae rerum corrupti dolor expedita."
              url="/become-a-moderator/"
            />
          </div>
        </div>
      </PageSection>
      <div className="flex flex-wrap justify-between m-auto mb-20 w-11/12 md:flex-no-wrap">
        <div className="w-full text-center md:w-1/2 md:text-left">
          <h3 className="text-h3 font-extrabold mb-8">Podcast</h3>
          <h4 className="text-h4">
            Listen to the founds of Fullstack Nights geek out about technology
            and events in the tech world in a relaxed environment.
          </h4>
          <div className="mt-8">
            <h4 className="text-h4">Find on:</h4>
            <div className="flex justify-center md:justify-start">
              <img
                className="h-8 w-8 mr-3"
                src={ApplePodcasts}
                alt="Apple podcasts logo"
              />
              <img className="h-8 w-8" src={RSS} alt="RSS logo" />
            </div>
          </div>
        </div>
        <div className="w-full mt-8 md:w-1/2 md:mt-0">
          <Image />
        </div>
      </div>
      <PageHighlight
        header="Join the community in Slack"
        subheader="Ask questions, get help from the community and stay up to date with
        the latest events."
        url={SLACK_LINK}
        urlTitle="Join us"
      />
    </Layout>
  );
}

export default IndexPage;
