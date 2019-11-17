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
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci incidunt iure autem provident omnis aut ex, laborum sint tempora officiis tempore sequi, nam, suscipit aspernatur porro voluptatibus placeat fugit deleniti."
  },
  {
    question: "Why are we doing this?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci incidunt iure autem provident omnis aut ex, laborum sint tempora officiis tempore sequi, nam, suscipit aspernatur porro voluptatibus placeat fugit deleniti."
  },
  {
    question: "What's the format of our event?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci incidunt iure autem provident omnis aut ex, laborum sint tempora officiis tempore sequi, nam, suscipit aspernatur porro voluptatibus placeat fugit deleniti."
  },
  {
    question: "How can I get involved?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci incidunt iure autem provident omnis aut ex, laborum sint tempora officiis tempore sequi, nam, suscipit aspernatur porro voluptatibus placeat fugit deleniti."
  }
];

export default function() {
  return (
    <Layout>
      <SEO title="About" />
      <GradientBackground className="flex flex-col items-center justify-center text-center">
        <h2 className="text-h2 font-bold text-white">
          A brief introduction to FSN
        </h2>
        <h4 className="text-h4 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
        header="Don't be an idiot?"
        subheader="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, quis? Sequi eius itaque blanditiis aliquam, fuga eaque ex esse repellendus accusamus? Vitae quos magni ipsum numquam obcaecati delectus iusto iste."
        url="https://www.google.com"
        urlTitle="Code of Conduct"
      />
    </Layout>
  );
}
