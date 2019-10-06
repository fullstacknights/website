import React from "react";
import { Link } from "gatsby";

import SectionHighlight from "../components/section-highlight";
import Layout from "../components/layout";
import Image from "../components/image";
import Card from "../components/card";
import ProfileCard from "../components/profile-card";
import SEO from "../components/seo";
import styles from "./index.module.css";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SectionHighlight>
      <div className="text-center mb-8 mt-12">
        <h2 className="text-h2 font-bold text-white">Fullstack Nights</h2>
        <h4 className="text-h4 text-white">
          Charlas sobre technología y diseño en un ambiente informal
        </h4>
      </div>
    </SectionHighlight>
    <div className="flex justify-center">
      <Card className={`w-11/12 py-7 text-center ${styles.nextEventCard}`}>
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
    </div>
    <h1 className="text-h1 font-bold">Hello world!</h1>
    <h3 className="text-h3 font-extrabold">Hello world!</h3>
    <p class="text-rg font-normal">Hello world!</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
