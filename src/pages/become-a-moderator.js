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
    question: "What can I speak about?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere atque minus et debitis! Illo obcaecati, maiores nemo odit animi distinctio error tenetur"
  },
  {
    question: "I’m new to this technology, can I speak about it?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere atque minus et debitis! Illo obcaecati, maiores nemo odit animi distinctio error tenetur"
  },
  {
    question: "Can I recommend someone to speak at this event?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere atque minus et debitis! Illo obcaecati, maiores nemo odit animi distinctio error tenetur"
  },
  {
    question: "Where can I find examples of other talks and presentations?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere atque minus et debitis! Illo obcaecati, maiores nemo odit animi distinctio error tenetur"
  }
];

export default function() {
  return (
    <Layout>
      <SEO title="Become a moderator" />
      <GradientBackground className="pt-13">
        <div className="flex flex-col text-center mt-18">
          <h2 className="text-h2 font-bold text-white">
            Become a topic moderator
          </h2>
          <h4 className="text-h4 text-white mb-8">
            We’re constantly looking for moderators and topics for FSN Topic
            Tables. Join us!
          </h4>
        </div>
      </GradientBackground>
      <div className="w-11/12 m-auto mb-20 mt-20 lg:w-2/3 lg:-mt-52 max-w-6xl">
        <div className="flex flex-wrap lg:flex-no-wrap">
          <div className="flex flex-initial w-full mb-4 lg:w-1/2 lg:mr-4 lg:mb-0">
            <CallToAction
              title="Moderator"
              description="A moderator is someone who's knowledgeable about a specific topic and is willing to share their experience with others. As a moderator you will help establish and move a topic along. The goal is for everyone to learn and share their experience through conversations."
              url={FORM_LINK}
              urlTitle="Apply"
            />
          </div>
          <div className="flex flex-initial w-full lg:w-1/2">
            <CallToAction
              title="Topic"
              description="You don't have to be a moderator to participate on FSN Topic Tables. If you're interested in having a conversation about a particular topic but you don't feel confident to moderate a table or give a presentation? Don't worry, you can propose your topic and we'll do our best to find someone who's willing to moderate a table."
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
