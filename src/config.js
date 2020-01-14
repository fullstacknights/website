const CONFIG = {
  activeEvent: false,
  event: {
    type: "speakers",
    date: "12/17/2019",
    venue: {
      name: "Parallel 18",
      location:
        "https://www.google.com/maps/place/Parallel+18/@18.4501121,-66.0760084,17z/data=!3m1!4b1!4m5!3m4!1s0x8c036f368557908f:0x9c05ad2cb99d5e31!8m2!3d18.4501121!4d-66.0738197"
    },
    participants: [
      {
        name: "Kip Martin",
        topic: "User Centered Design",
        img: "/past-speakers/kip-martin.jpeg",
        links: [{ network: "twitter", url: "https://twitter.com/uberkip" }]
      },
      {
        name: "Sergio Mattei",
        topic: "Shipping Projects at Lightning Speed with Django and NextJS",
        img: "/past-speakers/sergio-mattei.jpeg",
        links: [
          { network: "github", url: "https://github.com/matteing" },
          { network: "twitter", url: "https://mobile.twitter.com/matteing" }
        ]
      }
    ]
  }
};

export default CONFIG;
