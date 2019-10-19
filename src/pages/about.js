import React from "react";

import {
  GradientBackground,
  Layout,
  PageSection,
  PageHighlight
} from "../components/index.js";

const ORGANIZERS = [
  {
    name: "Emmanuel Luciano",
    img: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  { name: "Raúl Negrón", img: "https://randomuser.me/api/portraits/men/3.jpg" },
  {
    name: "Ricardo Mercado",
    img: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  { name: "Yamil Asusta", img: "https://randomuser.me/api/portraits/men/3.jpg" }
];

const FOUNDERS = [
  { name: "Axel Rivera", img: "https://randomuser.me/api/portraits/men/3.jpg" },
  {
    name: "Froilan Irizarry",
    img: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    name: "Giovanni Collazo",
    img: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  { name: "José Padilla", img: "https://randomuser.me/api/portraits/men/3.jpg" }
];

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
      <GradientBackground>
        <div className="flex items-center justify-center h-full">
          <div
            className="w-10/12 text-center self-center"
            style={{ marginTop: -65 }}
          >
            <h2 className="text-h2 font-bold text-white">
              A brief introduction to FSN
            </h2>
            <h4 className="text-h4 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h4>
          </div>
        </div>
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
          {ORGANIZERS.map(organizer => (
            <div className="w-1/4 text-center">
              <img
                className="avatar m-auto"
                src={organizer.img}
                alt={organizer.name}
                style={{ height: 150, width: 150 }}
              />
              <p className="mt-3">{organizer.name}</p>
            </div>
          ))}
        </div>
      </PageSection>
      <PageSection title="Founders">
        <div className="flex flex-wrap">
          {FOUNDERS.map(founder => (
            <div className="w-1/4 text-center">
              <img
                className="avatar m-auto"
                src={founder.img}
                alt={founder.name}
                style={{ height: 150, width: 150 }}
              />
              <p className="mt-3">{founder.name}</p>
            </div>
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
