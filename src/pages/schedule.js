import React from "react";

import {
  Card,
  GradientBackground,
  Layout,
  Timeline
} from "../components/index";

const EVENTS = [
  {
    dateTime: "Sept 2",
    header: "Parallel 18",
    subheader: "Make your way to our venue"
  },
  {
    dateTime: "7:00pm",
    header: "Doors open",
    subheader: "Check-in and reset your open-mic spot"
  },
  {
    dateTime: "7:30pm",
    header: "Introduction and kick-off",
    subheader: "Grab your seat"
  },
  {
    dateTime: "7:40pm",
    header: "Juana del Pueblo",
    subheader: "I'll show you the cool stuff"
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
    header: "Juana del Pueblo",
    subheader: "I'll show you the cool stuff"
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

export default function() {
  return (
    <Layout>
      <GradientBackground className="flex flex-col items-center justify-center md:items-start md:justify-start">
        <div className="py-6 px-4 -mt-13 text-center md:w-1/3 md:text-left md:py-0 md:mt-18 md:pl-8 md:pr-0">
          <h2 className="text-h2 font-bold text-white">Schedule</h2>
          <h4 className="text-h4 text-white mb-8">
            Charlas sobre tecnología y diseño en un ambiente informal
          </h4>
          <a
            className="btn btn--primary mt-11"
            href="https://fullstacknights.eventbrite.com"
            target="_blank"
          >
            Get tickets
          </a>
        </div>
      </GradientBackground>
      <div className="w-11/12 m-auto mb-15 md:flex md:justify-end md:px-9">
        <div className="inline-block mt-20 md:-mt-82 md:w-2/3">
          <Card className="p-4 md:p-8 md:ml-6">
            <Timeline events={EVENTS} />
          </Card>
        </div>
      </div>
    </Layout>
  );
}
