import React from "react";
import { useTranslation } from "react-i18next";

import format from "date-fns/format";

import {
  Card,
  GradientBackground,
  Layout,
  Timeline,
  SEO
} from "../components/index";
import CONFIG from "../config";

export default function() {
  const { t } = useTranslation();

  const venue = {
    dateTime: format(new Date(CONFIG.event.date), "MMM d"),
    header: "Parallel 18",
    subheader: "Make your way to our venue"
  };
  const welcome = {
    dateTime: "7:00pm",
    header: "Doors open",
    subheader: "Check-in and reset your open-mic spot"
  };

  const TOPIC_TABLES_SCHEDULE = [
    venue,
    welcome,
    {
      dateTime: "7:15pm",
      header: "Introduction and kick-off",
      subheader: "Grab your seat"
    },
    {
      dateTime: "7:25pm",
      header: "Open Mic (6 x 3 min)"
    },
    {
      dateTime: "7:40pm",
      header: "Topic Tables",
      subheader: "I'll show you the cool stuff"
    },
    {
      dateTime: "8:40pm",
      header: "Wrap-up / Networking"
    },
    {
      dateTime: "9:00pm",
      header: "The end"
    }
  ];

  const speaker1 = CONFIG.event.participants[0];
  const speaker2 = CONFIG.event.participants[1];
  const SPEAKERS_SCHEDULE = [
    venue,
    welcome,
    {
      dateTime: "7:30pm",
      header: "Introduction and kick-off",
      subheader: "Grab your seat"
    },
    {
      dateTime: "7:40pm",
      header: speaker1.name,
      subheader: speaker1.topic
    },
    {
      dateTime: "8:10pm",
      header: "Open Mic (6 x 3 min)"
    },
    {
      dateTime: "8:25pm",
      header: "Networking / Break"
    },
    {
      dateTime: "8:40pm",
      header: speaker2.name,
      subheader: speaker2.topic
    },
    {
      dateTime: "9:10pm",
      header: "Wrap-up / Networking"
    },
    {
      dateTime: "9:30pm",
      header: "The end"
    }
  ];

  const events =
    CONFIG.event.type === "topic-table"
      ? TOPIC_TABLES_SCHEDULE
      : SPEAKERS_SCHEDULE;

  return (
    <Layout>
      <SEO title="Schedule" />
      <GradientBackground className="flex flex-col items-center justify-center text-center">
        <h2 className="text-h2 font-bold text-white">
          {t("schedule.schedule")}
        </h2>
        <h4 className="text-h4 text-white mb-8">
          {t("schedule.we-try-to-be-punctual")}
        </h4>
        <a
          className="btn btn--primary w-1/2 lg:w-2/12"
          href="https://fullstacknights.eventbrite.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("schedule.get-tickets")}
        </a>
      </GradientBackground>
      <div className="w-11/12 m-auto mb-15 lg:w-2/3 lg:flex lg:justify-center lg:items-center">
        <div className="mt-20">
          <Card className="p-4 lg:p-8 lg:ml-6">
            <Timeline events={events} />
          </Card>
        </div>
      </div>
    </Layout>
  );
}
