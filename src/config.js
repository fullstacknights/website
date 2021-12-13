const CONFIG = {
  activeEvent: true,
  event: {
    type: "speakers",
    date: "01/11/2022",
    venue: {
      name: "Base Co-Work",
      location: "https://goo.gl/maps/Rf11XjuEjLoeEiwX9"
    },
    participants: [
      {
        name: "Abdiel Aviles",
        topic: "TBD",
        img: "/past-speakers/abdiel-aviles.jpeg",
        links: [{ network: "github", url: "https://github.com/abdielou" }]
      },
      {
        name: "David Bartolomei",
        topic: "Transforming data in your warehouse with DBT",
        img: "/past-speakers/david-bartolomei.png",
        links: [
          { network: "twitter", url: "https://mobile.twitter.com/dbartolomei_" }
        ]
      }
    ]
  }
};

export default CONFIG;
