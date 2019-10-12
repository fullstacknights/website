import React from "react";

import RSS from "../assets/rss.svg";
import SEO from "../components/seo";
import Image from "../components/image";
import Layout from "../components/layout";
import PageSection from "../components/page-section";
import CallToAction from "../components/call-to-action";
import ApplePodcasts from "../assets/apple-podcasts.svg";
import PageHighlight from "../components/page-highlight";
import UpcomingEvent from "../components/upcoming-event";
import GradientBackground from "../components/gradient-background";

const SLACK_LINK = "https://sopr-slack.herokuapp.com/";

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <GradientBackground>
        <div className="text-center mb-8 mt-12">
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
        <div className="flex justify-between">
          <div className="w-1/3 mr-4">
            <CallToAction
              title="Become a speaker"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A cum, ullam nisi optio soluta laboriosam eum dignissimos assumenda animi alias. Consectetur architecto repudiandae quidem, ea vitae rerum corrupti dolor expedita."
              url="https://www.google.com"
            />
          </div>
          <div className="w-1/3 mr-4">
            <CallToAction
              title="Become a mentor"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A cum, ullam nisi optio soluta laboriosam eum dignissimos assumenda animi alias. Consectetur architecto repudiandae quidem, ea vitae rerum corrupti dolor expedita."
              url="https://www.google.com"
            />
          </div>
          <div className="w-1/3">
            <CallToAction
              title="Propose a topic"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A cum, ullam nisi optio soluta laboriosam eum dignissimos assumenda animi alias. Consectetur architecto repudiandae quidem, ea vitae rerum corrupti dolor expedita."
              url="https://www.google.com"
            />
          </div>
        </div>
      </PageSection>
      <div className="flex justify-between m-auto mb-20 w-11/12">
        <div className="w-1/2">
          <h3 className="text-h3 font-extrabold mb-8">Podcast</h3>
          <h4 className="text-h4">
            Listen to the founds of Fullstack Nights geek out about technology
            and events in the tech world in a relaxed environment.
          </h4>
          <div className="mt-8">
            <h4 className="text-h4">Find on:</h4>
            <div className="flex">
              <img
                className="h-8 w-8 mr-3"
                src={ApplePodcasts}
                alt="Apple podcasts logo"
              />
              <img className="h-8 w-8" src={RSS} alt="RSS logo" />
            </div>
          </div>
        </div>
        <div className="w-1/2">
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
