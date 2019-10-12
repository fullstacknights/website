import React, { useState, useCallback } from "react";

import {
  Layout,
  GradientBackground,
  PageSection,
  CallToAction,
  FAQList
} from "../components/index";

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
      <GradientBackground>
        <div className="flex flex-col items-center justify-center text-center h-full">
          <h2 className="text-h2 font-bold text-white">
            Give a talk at Fullstack Nights!
          </h2>
          <h4 className="text-h4 text-white mb-8">
            We're constantly looking for speakers. Join us!
          </h4>
          <a href={FORM_LINK} className="btn btn--primary mb-3">
            Propose a talk
          </a>
          <p className="text-white text-xs">
            Have questions? Check out our FAQ or email us
          </p>
        </div>
      </GradientBackground>
      <PageSection
        className="mt-20"
        title="We'll help you craft your presentation"
        description="We are committed to help you have the best presentaion possible. In order to do so we take the following steps before your presentation"
      >
        <div className="flex">
          <div className="w-1/3 mr-4">
            <CallToAction
              title="Topic scoping"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere atque minus et debitis! Illo obcaecati, maiores nemo odit animi distinctio error tenetur"
            />
          </div>
          <div className="w-1/3 mr-4">
            <CallToAction
              title="Slides evaluation"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere atque minus et debitis! Illo obcaecati, maiores nemo odit animi distinctio error tenetur"
            />
          </div>
          <div className="w-1/3">
            <CallToAction
              title="Presentation rehearsal"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere atque minus et debitis! Illo obcaecati, maiores nemo odit animi distinctio error tenetur"
            />
          </div>
        </div>
      </PageSection>
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
    </Layout>
  );
}
