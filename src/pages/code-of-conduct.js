import React from "react";

import {
  Avatar,
  GradientBackground,
  Layout,
  PageSection,
  SEO
} from "../components/index.js";

import { ORGANIZERS } from "../constants";

export default function() {
  return (
    <Layout>
      <SEO title="Code of Conduct" />
      <GradientBackground className="flex flex-col items-center justify-center text-center">
        <h2 className="text-h2 font-bold text-white">Code of conduct</h2>
      </GradientBackground>
      <PageSection title="Short version" className="mt-20">
        <div className="w-11/12 m-auto">
          <p className="text-rg">
            Our conference is dedicated to offering a welcoming experience for
            everyone, regardless of their gender, sexual orientation, ability,
            appearance, ethnicity or religion. We do not tolerate abuses towards
            the participants of the conference in any form. Sexual language
            and/or sexualized images are not appropriate for any aspect of the
            conference, including talks, workshops, gatherings, Twitter or any
            other online medium associated to the event. Conference participants
            who violate these rules could be sanctioned or expelled from the
            conference without any reimbursement, at the discretion of the
            conference organizers.
          </p>
        </div>
      </PageSection>
      <PageSection title="Long version">
        <div className="w-11/12 m-auto">
          <p className="text-rg mb-6">
            Examples of abuses are: offensive comments regarding gender, sexual
            orientation, ability, appearance, ethnicity or religion, sexual
            images in public spaces, intimidation, harassment, recording or
            photographing abuses, continued interruptions of the conference
            talks or other events, inappropriate physical contact and sexual
            harassment.
          </p>
          <p className="text-rg mb-6">
            We expect participants who are made aware of their abusive behavior
            to immediately comply and stop said behavior.
          </p>
          <p className="text-rg mb-6">
            Conference sponsors are also subject to the policies against abuse.
            In particular, sponsors should not make use of sexual content.
            Conference personnel (volunteers included) should not make use of
            clothing/uniforms/disguises that are sexual in nature.
          </p>
          <p className="text-rg mb-6">
            If a participant incurs in abusive behavior, the conference
            personnel reserves the right to take official action, which may
            include warnings as well as expulsion from the event without any
            reimbursement.
          </p>
          <p className="text-rg mb-6">
            If you are suffering from abuse at the conference, know of anyone
            suffering from abuse, or feel uncomfortable in any other way, please
            contact any conference personnel immediately.
          </p>
          <p className="text-rg mb-6">
            The conference personnel will gladly help participants in contacting
            the security personnel of the event location or the local
            authorities, provide escort out of the conference, or otherwise
            assist those who are the victims of abuse in any way so that they
            can feel comfortable during the event. We value your assistance.
          </p>
          <p className="text-rg">
            We hope that participants follow these rules and regulations in the
            conference, workshops and any other social event related to the
            conference.
          </p>
        </div>
      </PageSection>
      <PageSection
        title="Need help?"
        description="Contact one of the organizars through twitter or personally."
      >
        <div className="flex flex-wrap">
          {ORGANIZERS.map((organizer, index) => (
            <Avatar key={index} {...organizer} />
          ))}
        </div>
      </PageSection>
    </Layout>
  );
}
