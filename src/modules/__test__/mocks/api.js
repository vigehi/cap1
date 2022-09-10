const getepisodeData = () => {
  return [
    {
      id: 1,
      url: "https://www.tvmaze.com/episodes/1/under-the-dome-1x01-pilot",
      name: "Pilot",
      season: 1,
      number: 1,
      type: "regular",
      airdate: "2013-06-24",
      airtime: "22:00",
      airstamp: "2013-06-25T02:00:00+00:00",
      runtime: 60,
      rating: { average: 7.7 },
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_landscape/1/4388.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/1/4388.jpg",
      },
      summary:
        "<p>When the residents of Chester's Mill find themselves trapped under a massive transparent dome with no way out, they struggle to survive as resources rapidly dwindle and panic quickly escalates.</p>",
      _links: {
        self: {
          href: "https://api.tvmaze.com/episodes/1",
        },
      },
    },
  ];
};

const getComment = () => [
  {
    username: "edith",
    comment: "like the  episode",
  },
];
export { getepisodeData, getComment };
// 2022-09-10 hhhhh: sdfg
