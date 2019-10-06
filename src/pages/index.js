import React from "react";

import GradientBackground from "../components/gradient-background";
import Layout from "../components/layout";
import Image from "../components/image";
import Card from "../components/card";
import ProfileCard from "../components/profile-card";
import CallToAction from "../components/call-to-action";
import PageSection from "../components/page-section";
import SEO from "../components/seo";
import styles from "./index.module.css";
import ApplePodcasts from "../assets/apple-podcasts.svg";
import RSS from "../assets/rss.svg";
import PageHighlight from "../components/page-highlight";

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <GradientBackground>
        <div className="text-center mb-8 mt-12">
          <h2 className="text-h2 font-bold text-white">Fullstack Nights</h2>
          <h4 className="text-h4 text-white">
            Charlas sobre technología y diseño en un ambiente informal
          </h4>
        </div>
      </GradientBackground>
      <section className="mb-20">
        <Card
          className={`w-11/12 m-auto py-7 text-center ${styles.nextEventCard}`}
        >
          <div className="mb-4">
            <h3 className="text-h3 font-extrabold mb-5">Upcoming event</h3>
            <h4 className="text-h4 mb-2">Speakers</h4>
            <p className="text-h4">Monday, September 2, at 7pm</p>
            <p className="text-h4">Venue: Parallel 18</p>
          </div>
          <div className="mb-10">
            <a href="" className="btn btn--primary">
              Get tickets
            </a>
          </div>
          <h4 className="text-h4 font-extrabold">Line up for the next event</h4>
          <div className={`flex mt-6 mb-8 ${styles.profileContainer}`}>
            <ProfileCard
              img="https://randomuser.me/api/portraits/men/3.jpg"
              name="Juana del Pueblo"
              title="Something cool goes here!"
            />
            <ProfileCard
              img="https://randomuser.me/api/portraits/men/3.jpg"
              name="Juana del Pueblo"
              title="Something cool goes here!"
            />
          </div>
          <p className="text-rg">
            While you wait for the event check out our code of conduct, schedule
            or request an open mic spot.
          </p>
        </Card>
      </section>
      <PageSection
        title="Be a part of our events"
        description="The Fullstack Nights events are done by the community for the
    community. Without your participation we cannot keep these events
    going."
      >
        <div className="flex justify-between">
          <div className="w-1/3 mr-4">
            <CallToAction
              title="Become a speaker"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A cum, ullam nisi optio soluta laboriosam eum dignissimos assumenda animi alias. Consectetur architecto repudiandae quidem, ea vitae rerum corrupti dolor expedita."
              url="https://www.google.com"
            />
          </div>
          <div className="w-1/3 mr-4">
            <CallToAction
              title="Become a mentor"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A cum, ullam nisi optio soluta laboriosam eum dignissimos assumenda animi alias. Consectetur architecto repudiandae quidem, ea vitae rerum corrupti dolor expedita."
              url="https://www.google.com"
            />
          </div>
          <div className="w-1/3">
            <CallToAction
              title="Propose a topic"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. A cum, ullam nisi optio soluta laboriosam eum dignissimos assumenda animi alias. Consectetur architecto repudiandae quidem, ea vitae rerum corrupti dolor expedita."
              url="https://www.google.com"
            />
          </div>
        </div>
      </PageSection>
      <div className="flex justify-between m-auto mb-20 w-11/12">
        <div className="w-1/2">
          <h3 className="text-h3 font-extrabold mb-8">Podcast</h3>
          <h4 className="text-h4">
            Listen to the founds of Fullstack Nights geek out about technology
            and events in the tech world in a relaxed environment.
          </h4>
          <div className="mt-8">
            <h4 className="text-h4">Find on:</h4>
            <div className="flex">
              <img
                className="h-8 w-8 mr-3"
                src={ApplePodcasts}
                alt="Apple podcasts logo"
              />
              <img className="h-8 w-8" src={RSS} alt="RSS logo" />
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <Image />
        </div>
      </div>
      <PageHighlight
        header="Join the community in Slack"
        subheader="Ask questions, get help from the community and stay up to date with
        the latest events."
        url="https://www.google.com"
        urlTitle="Join us"
      />
    </Layout>
  );
}

export default IndexPage;
