import CONFIG from "./config";

export const SLACK_LINK = "https://sopr-slack.herokuapp.com/";

export const ORGANIZERS = [
  {
    name: "Emmanuel Luciano",
    img: "/organizers/emmanuel-luciano.jpeg",
    social: [{ network: "twitter", link: "https://twitter.com/rucury" }]
  },
  {
    name: "Raúl Negrón",
    img: "/organizers/raul-negron.jpeg",
    social: [{ network: "twitter", link: "https://twitter.com/rucury" }]
  },
  {
    name: "Ricardo Mercado",
    img: "/organizers/ricardo-mercado.jpeg",
    social: [{ network: "twitter", link: "https://twitter.com/futoricky" }]
  },
  {
    name: "Yamil Asusta",
    img: "/organizers/yamil-asusta.jpeg",
    social: [{ network: "twitter", link: "https://twitter.com/elbuo8" }]
  }
];

export const FOUNDERS = [
  {
    name: "Axel Rivera",
    img: "/founders/axel-rivera.jpeg",
    social: [{ network: "twitter", link: "https://twitter.com/arivera" }]
  },
  {
    name: "Froilan Irizarry",
    img: "/founders/froilan-irizarry.jpeg",
    social: [{ network: "twitter", link: "https://twitter.com/froidotdev" }]
  },
  {
    name: "Giovanni Collazo",
    img: "/founders/giovanni-collazo.jpeg",
    social: [{ network: "twitter", link: "https://twitter.com/gcollazo" }]
  },
  {
    name: "José Padilla",
    img: "/founders/jose-padilla.jpeg",
    social: [{ network: "twitter", link: "https://twitter.com/jpadilla_" }]
  }
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
