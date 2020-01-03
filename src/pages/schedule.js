import React from "react";

import {
  Card,
  GradientBackground,
  Layout,
  Timeline,
  SEO
} from "../components/index";
import CONFIG from "../config";
import { TOPIC_TABLES_SCHEDULE, SPEAKERS_SCHEDULE } from "../schedules";

export default function() {
  const events =
    CONFIG.event.type === "topic-table"
      ? TOPIC_TABLES_SCHEDULE
      : SPEAKERS_SCHEDULE;

  return (
    <Layout>
      <SEO title="Schedule" />
      <GradientBackground className="flex flex-col items-center justify-center text-center">
        <h2 className="text-h2 font-bold text-white">Schedule</h2>
        <h4 className="text-h4 text-white mb-8">
          We try to be as organized and punctual as possible. Check out our
          schedule below.
        </h4>
        <a
          className="btn btn--primary w-1/2 lg:w-2/12"
          href="https://fullstacknights.eventbrite.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get tickets
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
