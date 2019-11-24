import React from "react";

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

const FORM_LINK =
  "https://docs.google.com/forms/d/1A6j6REuHBritR4e1NZJdjPZ_qYPni5Jzm-iLpDbP2eQ";

const FAQ = [
  {
    question: "What are topic tables?",
    answer:
      "Topic Tables is an event that brings together the community to talk about different topics in a relaxed and informal environment. Participants will be able to ask questions, talk about their experience and learn from others through moderated conversations."
  },
  {
    question: "Who should attend to this event?",
    answer:
      "Anyone who's interested in technology and design. It doesn't matter if you're a student, beginner or an expert. There's space for everyone to learn and grow."
  }
];

export default function() {
  return (
    <Layout>
      <SEO title="Become a moderator" />
      <GradientBackground className="pt-13">
        <div className="flex flex-col text-center mt-18">
          <h2 className="text-h2 font-bold text-white">
            Chat with the community on Topic Tables!
          </h2>
          <h4 className="text-h4 text-white mb-8">
            We're looking for people that are willing to share their experience
            with the community!
          </h4>
        </div>
      </GradientBackground>
      <div className="w-11/12 m-auto mb-20 mt-20 lg:w-2/3 lg:-mt-52 max-w-6xl">
        <div className="flex flex-wrap lg:flex-no-wrap">
          <div className="flex flex-initial w-full mb-4 lg:w-1/2 lg:mr-4 lg:mb-0">
            <CallToAction
              title="Moderator"
              description="We're looking for people with knowledge about a particular topic that are willing to moderate a discussion around that topic. The goal is for beginners and experts alike to learn and share their experience through conversations."
              url={FORM_LINK}
              urlTitle="Apply"
            />
          </div>
          <div className="flex flex-initial w-full lg:w-1/2">
            <CallToAction
              title="Topic"
              description="Interested in having a conversation about a particular topic, but don't feel you're the right fit to moderate or become a speaker? Send us your topic ideas and we'll try to find someone interested in sharing their knowledge on your suggested topic!"
              url={FORM_LINK}
              urlTitle="Propose"
            />
          </div>
        </div>
      </div>
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
      <PageSection title="Past Moderators">
        <div className="flex flex-wrap">
          {MODERATORS.map((moderator, index) => (
            <Avatar key={index} name={moderator.name} img={moderator.img} />
          ))}
        </div>
      </PageSection>
      <PageHighlight
        header="Still have questions?"
        subheader="Let us know if you have any questions about the presentation process. We’re here to help!"
        url={SLACK_LINK}
        urlTitle="Contact us"
      />
    </Layout>
  );
}
