import React from "react";
import { useTranslation } from "react-i18next";

import Card from "./card";
import ProfileCard from "./profile-card";
import RegistrationButton from "./registration-button";
import { formatFullDate, formatTime } from "../date";

function UpcomingEvent({
  participants,
  type,
  date,
  endDate,
  venue,
  registrationUrl
}) {
  const { t, i18n } = useTranslation();

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
            {formatFullDate(date, i18n.language)}, {t("upcoming-event.at")}{" "}
            {formatTime(date)}
            {endDate ? ` – ${formatTime(endDate)}` : ""}
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
          <RegistrationButton url={registrationUrl} />
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
      </Card>
    </section>
  );
}

export default UpcomingEvent;
