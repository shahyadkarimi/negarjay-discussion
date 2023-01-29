export const data = [
  {
    id: 3,
    date: 1672576574000,
    user: {
      name: "Bessie Cooper",
      avatar:
        "./images/shahyad.jpg",
    },
    text:
      "hello!",
    likes: 0,
    iLikedIt: false,
    replies: [
      {
        id: 5,
        date: 1672581014000,
        user: {
          name: "Marvin McKinney",
          avatar:
            "./images/shahyad.jpg",
        },
        text:
          "Yes, that sounds good! I can think about this tomorrow. Then do we plan to start that compaign?",
        likes: 3,
        iLikedIt: true,
      },
      {
        id: 6,
        date: 1672581614000,
        user: {
          name: "Bessie Cooper",
          avatar:
            "./images/shahyad.jpg",
        },
        text:
          "We plan to run the compaign on Friday - as far as I know. Do you think you will get this done by Thursday @Marvin?",
        likes: 0,
        iLikedIt: false,
      },
    ],
  },
];
