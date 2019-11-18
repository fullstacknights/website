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
      "Fullstack Nights is a monthly meetup for programers and designers interested in learning and sharing their knowledge in an informal and relaxed environment. Fullstack Nights consists on two events: Speakers and Topic Tables. FSN Speakers is an event that consists of 2 presentations that have a length of 20 minutes each. The topics of each presentation can be programing languages, frameworks, tools, databases, user interfaces, users experience and any other topic that can be of interest to our community. Topic Tables aims to bring the community together to share conversations about different topics. Participants can ask questions, discuss ideas and expand their knowledge through a moderated conversation."
  },
  {
    question: "Why are we doing this?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci incidunt iure autem provident omnis aut ex, laborum sint tempora officiis tempore sequi, nam, suscipit aspernatur porro voluptatibus placeat fugit deleniti."
  },
  {
    question: "Who should attend to this event?",
    answer:
      "Everyone who's interested in programming and interactive design. It doesn't matter if you're a student, an expert or if you just have a bit of curiosity about a topic. There's space for everyone to learn and share their experience."
  },
  {
    question: "What's the format of our event?",
    answer:
      "Fullstack Nights has different formats depending on the event. FSN Speakers aims to provide talks from people who are experts or are learning about about a topic. FSN Topic Tables is a forum there people from different skill levels can ask questions, discuss ideas and provide guidance to others in an informal setting."
  },
  {
    question: "How can I get involved?",
    answer:
      "You can get involved by becoming a speaker, becoming a moderator, proposing a topic or by joining our Slack community."
  }
];

export default function() {
  return (
    <Layout>
      <SEO title="About" />
      <GradientBackground className="flex flex-col items-center justify-center text-center">
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
              <p className="text-rg">{question.answer}</p>
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
