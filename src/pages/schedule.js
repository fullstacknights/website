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
      <GradientBackground>
        <div className="flex px-9 mt-18 mb-12">
          <div className="flex flex-col w-1/3">
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
        </div>
      </GradientBackground>
      <div className="flex justify-end px-9 mb-15">
        <div className="inline-block w-2/3" style={{ marginTop: -410 }}>
          <Card className="p-8 ml-6">
            <Timeline events={EVENTS} />
          </Card>
        </div>
      </div>
    </Layout>
  );
}
