import React from "react";

import Card from "./card";
import ProfileCard from "./profile-card";
import styles from "./upcoming-event.module.css";

const EVENTBRITE_LINK = "https://fullstacknights.eventbrite.com";

function UpcomingEvent() {
  return (
    <section className="mb-20">
      <Card className="w-11/12 m-auto p-6 text-center mt-20 md:-mt-52 max-w-6xl">
        <div className="mb-4">
          <h3 className="text-h3 font-extrabold mb-5">Upcoming event</h3>
          <h4 className="text-h4 mb-2">Speakers</h4>
          <p className="text-h4">Monday, September 2, at 7pm</p>
          <p className="text-h4">Venue: Parallel 18</p>
        </div>
        <div className="mb-10">
          <a
            href={EVENTBRITE_LINK}
            className="btn btn--primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get tickets
          </a>
        </div>
        <h4 className="text-h4 font-extrabold">Line up for the next event</h4>
        <div
          className={`flex flex-wrap justify-center mt-6 mb-8 ${styles.profileContainer} md:flex-no-wrap`}
        >
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
  );
}

export default UpcomingEvent;
