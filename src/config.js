// Luma keeps the street address guests-only, so the venue links to the event
// page rather than to a map.
const LUMA_EVENT_URL = "https://luma.com/s9jx3jri";

const CONFIG = {
  activeEvent: true,
  // When activeEvent is true, `endDate`, `agenda`, and `sponsors` are optional;
  // everything else is required.
  // date/endDate are local wall-clock ISO strings (no offset) so every visitor
  // sees the venue's time, not their own.
  // agenda drives the /schedule/ timeline; omit it to use the defaults below.
  // sponsors: [{ name, logo, url }] renders a Sponsors section on the home page.
  event: {
    type: "speakers",
    date: "2026-09-10T18:00:00",
    endDate: "2026-09-10T21:00:00",
    registrationUrl: LUMA_EVENT_URL,
    agenda: {
      kickOffMinutes: 20,
      firstTalkMinutes: 30,
      // 15 min talk + 5 min Q&A.
      talkMinutes: 20
    },
    venue: {
      name: "Bayamón, Puerto Rico",
      location: LUMA_EVENT_URL
    },
    participants: [
      {
        name: "Giovanni Collazo",
        topic: "jj es más fácil que git",
        img: "/founders/giovanni-collazo.jpeg",
        links: [{ network: "github", url: "https://github.com/gcollazo" }]
      },
      {
        name: "Christian Rodríguez",
        topic: "Tus agents necesitan acceso (seguro) a producción",
        img: "/organizers/christian-rodriguez.jpeg",
        links: [{ network: "github", url: "https://github.com/chrisrodz" }]
      },
      {
        name: "Raúl Negrón-Otero",
        topic: "Un vistazo a Django Template Partials",
        img: "/organizers/raul-negron.jpeg",
        links: [{ network: "github", url: "https://github.com/rnegron" }]
      }
    ],
    sponsors: [
      {
        name: "PostHog",
        logo: "/sponsors/posthog.svg",
        url: "https://posthog.com/"
      }
    ]
  }
};

export default CONFIG;
