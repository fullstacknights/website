import format from "date-fns/format";

import CONFIG from "./config";

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

export { TOPIC_TABLES_SCHEDULE, SPEAKERS_SCHEDULE };
