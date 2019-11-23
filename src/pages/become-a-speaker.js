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
      "You're welcomed to speak about programing languages, frameworks, tools, databases, infrastructure, email design, user interfaces, users experience, prototyping and any other topic or experience that can add value to our community."
  },
  {
    question: "How much time to I have to give my talk?",
    answer:
      "The talk will be 20 minutes and 5 minutes of Q&A after the presentation is over."
  },
  {
    question:
      "I recently learned about a new technology, can I speak about it?",
    answer:
      "Yes, of course! When we've just learned about a topic we have a unique perspective compared to an expert. Don't count yourself out and apply as a speaker!"
  },
  {
    question: "Can I recommend someone to speak at this event?",
    answer:
      "Yes! If you know someone that would be a good speaker at FSN you can apply on their behalf and we'll reach out to them."
  },
  {
    question:
      "I've never done any public speaking before, should I apply as a speaker?",
    answer:
      "Yes, you should! The FSN team is here to help you give the best talk possible! Before the event we'll rehearse the talk with you, give you feedback and help you polish your presentation."
  },
  {
    question: "Who should attend to this event?",
    answer:
      "Anyone who's interested in programming and design. It doesn't matter if you're a student, beginner or an expert. There's space for everyone to learn and grow."
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
          We're looking for people that are willing to share their experience
          with the community!
        </h4>
        <a href={FORM_LINK} className="btn btn--primary mb-3">
          Submit your proposal
        </a>
        <p className="text-white text-xs">
          Have questions? Check out our FAQ or email us
        </p>
      </GradientBackground>
      <PageSection
        className="mt-20"
        title="We'll help you polish your talk"
        description="Everyone has valuable knowledge to share and we are committed to help you give a top-quality talk. Before the event we'll go through the following process:"
      >
        <div className="flex flex-wrap lg:flex-no-wrap">
          <div className="flex flex-initial w-full mb-4 lg:w-1/3 lg:mr-4 lg:mb-0">
            <CallToAction
              title="Topic scoping"
              description="Before you're selected as a speaker we will research your topic. If our team finds your topic to be too broad we'll discuss different ways to narrow it down."
            />
          </div>
          <div className="flex flex-initial w-full mb-4 lg:w-1/3 lg:mr-4 lg:mb-0">
            <CallToAction
              title="Talk rehearsal"
              description="Two weeks before the event we'll do a dry run of your talk. We'll provide feedback about your talk structure, delivery and the time you consumed presenting."
            />
          </div>
          <div className="flex flex-initial w-full lg:w-1/3 lg:mr-4">
            <CallToAction
              title="Slides evaluation"
              description="During the dry run we'll evaluate the content in your slides and give you pointers that will help improve the visual aspect of your talk."
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
        <div class="text-center mt-6">
          <h4 className="text-h4 font-semibold mb-4">
            Ready to become a speaker?
          </h4>
          <a href={FORM_LINK} className="btn btn--primary mb-3">
            Submit your proposal
          </a>
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
