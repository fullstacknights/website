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
import PAST_SPEAKERS from "../past-speakers";

const FORM_LINK =
  "https://docs.google.com/forms/d/1SIL9HvzaQ34F3iHIIsMmDlS5Icoc9XPXTwrsr9_M87U/edit?ts=57ff9dee";

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
      <SEO title="Become a speaker" />
      <GradientBackground className="flex flex-col items-center justify-center text-center">
        <h2 className="text-h2 font-bold text-white">
          Give a talk at Fullstack Nights!
        </h2>
        <h4 className="text-h4 text-white mb-8">
          We're always on the lookout for new speakers. Join us!
        </h4>
        <a href={FORM_LINK} className="btn btn--primary mb-3">
          Propose a talk
        </a>
        <p className="text-white text-xs">
          Have questions? Check out our FAQ or email us
        </p>
      </GradientBackground>
      <PageSection
        className="mt-20"
        title="We'll help you craft your presentation"
        description="We're committed to help you give the best talk possible. Before your talk we'll take the following steps:"
      >
        <div className="flex flex-wrap lg:flex-no-wrap">
          <div className="w-full mb-4 lg:w-1/3 lg:mr-4 lg:mb-0">
            <CallToAction
              title="Topic scoping"
              description="Before you're selected as a speaker we will research your topic. If your topic is too broad we'll discuss different approaches to narrow down your topic."
            />
          </div>
          <div className="w-full mb-4 lg:w-1/3 lg:mr-4 lg:mb-0">
            <CallToAction
              title="Slides evaluation"
              description="Two weeks before the event we'll rehearse the talk with you. We'll give you feedback about the structure of your talk, your delivery and the time you consumed presenting"
            />
          </div>
          <div className="w-full lg:w-1/3 lg:mr-4">
            <CallToAction
              title="Presentation rehearsal"
              description="During the rehearsal we'll evaluate the content in your slides and give feedback to visually improve your talk."
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
