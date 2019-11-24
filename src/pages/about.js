import React from "react";

import {
  Avatar,
  GradientBackground,
  Layout,
  PageSection,
  PageHighlight,
  SEO
} from "../components/index.js";
import { ORGANIZERS, FOUNDERS } from "../constants";

const QUESTIONS = [
  {
    question: "What is Fullstack Nights?",
    answer:
      "Fullstack Nights is a monthly meetup for technologist and designers interested in learning and sharing their knowledge in an informal and relaxed environment."
  },
  {
    question: "What's the format of our event?",
    answer: `Great question! We actually have two events: FSN Speakers and FSN Topic Tables.
    \n FSN Speakers is an event that consists of two 20 minute talks, an open mic session, and some networking time. Past topics have ranged from introductions to programming frameworks to user experience in event design.
    \n FSN Topic Tables aims to bring the community together to share conversations about different topics. Participants can ask questions, discuss ideas and expand their knowledge through a moderated conversation.`
  },
  {
    question: "Who should attend to this event?",
    answer:
      "Everyone who's interested in technology and interactive design. It doesn't matter if you're a student, an expert or if you just have a bit of curiosity about a topic. There's space for everyone to learn and share their experience."
  },
  {
    question: "Why are we doing this?",
    answer: `The simple answer is, we ❤️ community. From the start our goal has been to provide value and bring together the different communities working around tech and startups. From our point of view sharing our experiences across disciplines makes the over all community stronger.
    \n We also wanted to meet people and provide a safe place where people can network and grow. We hope you'll join us in this journey.
    `
  },
  {
    question: "How can I get involved?",
    answer:
      "There's a number of ways. You can become a speaker or topic table moderator, you can propose a topic, or you can join our Slack community."
  }
];

export default function() {
  return (
    <Layout>
      <SEO title="About" />
      <GradientBackground className="flex flex-col items-center justify-center text-center px-2">
        <h2 className="text-h2 font-bold text-white">About Fullstack Nights</h2>
        <h4 className="text-h4 text-white">
          Fullstack Nights is a monthly meetup where programmers and designers
          can share their experience and knowledge in an informal environment.
        </h4>
      </GradientBackground>
      <PageSection title="A brief introduction to FSN" className="mt-20">
        <div className="m-auto w-11/12">
          {QUESTIONS.map(question => (
            <div className="mb-6">
              <h4 className="text-h4 font-extrabold mb-4">
                {question.question}
              </h4>
              <p className="text-rg whitespace-pre-line">{question.answer}</p>
            </div>
          ))}
        </div>
      </PageSection>
      <PageSection title="Event organizers">
        <div className="flex flex-wrap">
          {ORGANIZERS.map((organizer, index) => (
            <Avatar key={index} {...organizer} />
          ))}
        </div>
      </PageSection>
      <PageSection title="Founders">
        <div className="flex flex-wrap">
          {FOUNDERS.map((founder, index) => (
            <Avatar key={index} {...founder} />
          ))}
        </div>
      </PageSection>
      <PageHighlight
        header="We don't tolerate idiotic behavior"
        subheader="Every Fullstack Nights participant has to accept our code of conduct. The organizers of the event will enforce the meetup rules through out the event. We expect that every participant and organizer will help provide a safe environment for everyone."
        url="https://www.google.com"
        urlTitle="Code of Conduct"
      />
    </Layout>
  );
}
