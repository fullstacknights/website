const CONFIG = {
  activeEvent: true,
  event: {
    type: "topic-tables",
    date: "11/26/2019",
    venue: {
      name: "Parallel 18",
      location:
        "https://www.google.com/maps/place/Parallel+18/@18.4501121,-66.0760084,17z/data=!3m1!4b1!4m5!3m4!1s0x8c036f368557908f:0x9c05ad2cb99d5e31!8m2!3d18.4501121!4d-66.0738197"
    },
    participants: [
      {
        name: "Juan Álvarez",
        topic: "Scalable Interfaces with Big Data",
        img: "/moderators/juan-alvarez.jpeg",
        links: [{ network: "github", url: "https://github.com/juanjalvarez" }]
      },
      {
        name: "Alex Santos",
        topic: "UI Design",
        img: "/moderators/alex-santos.jpeg",
        links: [{ network: "dribbble", url: "https://dribbble.com/makobi" }]
      },
      {
        name: "Gabriel Pérez",
        topic: "Indie Hackers",
        img: "/moderators/gabriel-perez.jpeg",
        links: [
          { network: "twitter", url: "https://twitter.com/gaburieru4649" }
        ]
      }
    ]
  }
};

export default CONFIG;
