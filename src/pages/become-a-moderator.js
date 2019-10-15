import React from "react";

import {
  Layout,
  GradientBackground,
  PageSection,
  CallToAction,
  FAQList,
  PageHighlight
} from "../components/index";
import { SLACK_LINK } from "../constants";

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

const PAST_SPEAKERS = [
  {
    img: "https://randomuser.me/api/portraits/men/3.jpg",
    fullname: "Juan Pueblo"
  },
  {
    img: "https://randomuser.me/api/portraits/men/3.jpg",
    fullname: "Juan Pueblo"
  },
  {
    img: "https://randomuser.me/api/portraits/men/3.jpg",
    fullname: "Juan Pueblo"
  },
  {
    img: "https://randomuser.me/api/portraits/men/3.jpg",
    fullname: "Juan Pueblo"
  },
  {
    img: "https://randomuser.me/api/portraits/men/3.jpg",
    fullname: "Juan Pueblo"
  },
  {
    img: "https://randomuser.me/api/portraits/men/3.jpg",
    fullname: "Juan Pueblo"
  },
  {
    img: "https://randomuser.me/api/portraits/men/3.jpg",
    fullname: "Juan Pueblo"
  },
  {
    img: "https://randomuser.me/api/portraits/men/3.jpg",
    fullname: "Juan Pueblo"
  },
  {
    img: "https://randomuser.me/api/portraits/men/3.jpg",
    fullname: "Juan Pueblo"
  }
];

export default function() {
  return (
    <Layout>
      <GradientBackground>
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
      <div className="w-2/3 m-auto mb-20" style={{ marginTop: -260 }}>
        <div className="flex">
          <div className="w-1/2 mr-4">
            <CallToAction
              title="Topic scoping"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere atque minus et debitis! Illo obcaecati, maiores nemo odit animi distinctio error tenetur"
              url={FORM_LINK}
              urlTitle="Apply"
            />
          </div>
          <div className="w-1/2">
            <CallToAction
              title="Slides evaluation"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere atque minus et debitis! Illo obcaecati, maiores nemo odit animi distinctio error tenetur"
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
          <div className="w-10/12">
            <FAQList list={FAQ} />
          </div>
        </div>
      </PageSection>
      <PageSection title="Past Fullstack Nights Speakers">
        <div className="flex flex-wrap">
          {PAST_SPEAKERS.map(speaker => (
            <div className="w-1/4 text-center mb-8">
              <img
                className="avatar m-auto"
                src={speaker.img}
                alt={speaker.fullname}
                style={{ height: 150, width: 150 }}
              />
              <p className="mt-3">{speaker.fullname}</p>
            </div>
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
