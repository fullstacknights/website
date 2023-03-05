import React from "react";
import { useTranslation } from "react-i18next";

import { Link } from "gatsby";
import format from "date-fns/format";

import Card from "./card";
import ProfileCard from "./profile-card";

const EVENTBRITE_LINK = "https://fullstacknights.eventbrite.com";

function UpcomingEvent({ participants, type, date, venue }) {
  const { t } = useTranslation();

  return (
    <section className="mb-20">
      <Card className="w-11/12 m-auto p-6 text-center mt-20 lg:-mt-52 max-w-6xl lg:py-12">
        <div className="mb-4">
          <h3 className="text-h3 font-extrabold mb-4">
            {t("upcoming-event.upcoming-event")}
          </h3>
          <h4 className="text-h4 mb-2">
            {type === "topic-tables" ? "Topic Tables" : "Speakers"}
          </h4>
          <p className="text-h4">
            {format(new Date(date), "EEEE, MMMM d, y")},{" "}
            {t("upcoming-event.at")} 7pm
          </p>
          <p className="text-h4 flex items-center justify-center">
            {t("upcoming-event.venue")}:
            <a
              className="flex flex-col self-center link ml-1"
              href={venue.location}
              target="_blank"
              rel="noopener noreferrer"
            >
              {venue.name}
            </a>
          </p>
        </div>
        <div className="mb-10">
          <a
            className="btn btn--primary w-1/2 lg:w-2/12"
            href={EVENTBRITE_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("upcoming-event.get-tickets")}
          </a>
        </div>
        <h4 className="text-h4 font-extrabold">
          {t("upcoming-event.line-up")}
        </h4>
        <div
          className={`flex flex-wrap justify-center mt-6 mb-8 lg:flex-nowrap`}
        >
          {participants.map((participant, index) => (
            <ProfileCard
              key={index}
              img={participant.img}
              name={participant.name}
              title={participant.topic}
              links={participant.links}
            />
          ))}
        </div>
        <p className="text-rg inline-block">
          {t("upcoming-event.while-you-wait")}{" "}
          <div className="inline-block">
            <Link
              className="flex flex-col self-center link"
              to="/code-of-conduct"
            >
              {t("upcoming-event.code-of-conduct")}
            </Link>
          </div>
          ,{" "}
          <div className="inline-block">
            <Link className="flex flex-col link" to="/schedule">
              {t("upcoming-event.schedule")}
            </Link>
          </div>{" "}
          {t("upcoming-event.or-request-an-open-mic")}
        </p>
      </Card>
    </section>
  );
}

export default UpcomingEvent;
