import CONFIG from "./config";

export const SLACK_LINK = "https://sopr-slack.herokuapp.com/";

export const ORGANIZERS = [
  {
    name: "Emmanuel Luciano",
    img: "/organizers/emmanuel-luciano.jpeg"
  },
  { name: "Raúl Negrón", img: "/organizers/raul-negron.jpeg" },
  {
    name: "Ricardo Mercado",
    img: "/organizers/ricardo-mercado.jpeg"
  },
  { name: "Yamil Asusta", img: "/organizers/yamil-asusta.jpeg" }
];

export const FOUNDERS = [
  { name: "Axel Rivera", img: "/founders/axel-rivera.jpeg" },
  {
    name: "Froilan Irizarry",
    img: "/founders/froilan-irizarry.jpeg"
  },
  {
    name: "Giovanni Collazo",
    img: "/founders/giovanni-collazo.jpeg"
  },
  { name: "José Padilla", img: "/founders/jose-padilla.jpeg" }
];

const SECTIONS = [
  { title: "About", to: "/about/" },
  { title: "Code of Conduct", to: "/code-of-conduct/" },
  { title: "Schedule", to: "/schedule/" },
  { title: "Speakers", to: "/speakers/" },
  { title: "Topic Tables", to: "/topic-tables/" }
];

export function getSections() {
  const { activeEvent } = CONFIG;

  if (activeEvent) {
    return SECTIONS;
  }

  return SECTIONS.filter(section => section.to !== "/schedule/");
}
