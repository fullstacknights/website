import React from "react";
import { useTranslation } from "react-i18next";

import { addMinutes } from "date-fns";

import {
  Card,
  GradientBackground,
  Layout,
  LumaEvents,
  RegistrationButton,
  Timeline,
  SEO
} from "../components/index";
import CONFIG from "../config";
import { formatShortDay, formatTime } from "../date";

const DEFAULT_AGENDA = {
  kickOffMinutes: 20,
  firstTalkMinutes: 30,
  talkMinutes: 20
};

function buildTimeline(event, t, language) {
  const { kickOffMinutes, firstTalkMinutes, talkMinutes } =
    event.agenda ?? DEFAULT_AGENDA;
  const start = new Date(event.date);
  const at = (minutes) => formatTime(addMinutes(start, minutes));

  return [
    {
      dateTime: formatShortDay(start, language),
      header: event.venue.name,
      subheader: t("schedule.make-your-way-to-our-venue")
    },
    {
      dateTime: at(0),
      header: t("schedule.doors-open"),
      subheader: t("schedule.check-in")
    },
    {
      dateTime: at(kickOffMinutes),
      header: t("schedule.introduction-and-kick-off"),
      subheader: t("schedule.grab-your-seat")
    },
    ...event.participants.map((_, index) => ({
      dateTime: at(firstTalkMinutes + index * talkMinutes),
      header: t("schedule.presentation", { number: index + 1 })
    })),
    {
      dateTime: at(firstTalkMinutes + event.participants.length * talkMinutes),
      header: t("schedule.wrap-up-networking")
    },
    ...(event.endDate
      ? [{ dateTime: formatTime(event.endDate), header: t("schedule.the-end") }]
      : [])
  ];
}

function ScheduleHeading({ children }) {
  const { t } = useTranslation();

  return (
    <GradientBackground className="flex flex-col items-center justify-center text-center">
      <h2 className="text-h2 font-bold text-white">{t("schedule.schedule")}</h2>
      <h4 className="text-h4 text-white mb-8">
        {t("schedule.we-try-to-be-punctual")}
      </h4>
      {children}
    </GradientBackground>
  );
}

export default function Schedule() {
  const { t, i18n } = useTranslation();
  const { activeEvent, event } = CONFIG;

  // Reachable by bookmark even when hidden from the nav.
  if (!activeEvent) {
    return (
      <Layout>
        <ScheduleHeading />
        <div className="mt-20">
          <LumaEvents />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <ScheduleHeading>
        <RegistrationButton url={event.registrationUrl} />
      </ScheduleHeading>
      <div className="w-11/12 m-auto mb-15 lg:w-2/3 lg:flex lg:justify-center lg:items-center">
        <div className="mt-20">
          <Card className="p-4 lg:p-8 lg:ml-6">
            <Timeline events={buildTimeline(event, t, i18n.language)} />
          </Card>
        </div>
      </div>
    </Layout>
  );
}

export const Head = () => <SEO title="Schedule" />;
