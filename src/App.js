import React from "react";
import Card from "./Card"; // Import the reusable Card component

const App = () => {
  const cardData = [
    {
      id: 1,
      title: "Card 1",
      description: "This is the description for card .",
      image:
        "https://img.freepik.com/free-photo/lake-with-trees_1136-155.jpg?t=st=1728656621~exp=1728660221~hmac=58cab60fd12931c6d08784abc714a29ce5a992fd89d6ac951ef56455b960f1af&w=996",
    },
    {
      id: 2,
      title: "Card 2",
      description: "This is the description for card .",
      image:
        "https://img.freepik.com/free-photo/green-trees-near-lake-mountain-sunset_395237-90.jpg?t=st=1728656553~exp=1728660153~hmac=9656a558b9939addc764fb414cac05ad2b4a433e57cb0511a5bc67bd9ab700b4&w=1060",
    },
    {
      id: 3,
      title: "Card 3",
      description: "This is the description for card .",
      image:
        "https://img.freepik.com/free-photo/view-spectacular-nature-landscape_23-2150763636.jpg?t=st=1728656583~exp=1728660183~hmac=12603d8d3bdd1c5f31d7c0b3e5a25cda386d7a20b7db7ea92dcfcd3b170d358b&w=1060",
    },
    {
      id: 4,
      title: "Card 4",
      description: "This is the description for card .",
      image:
        "https://img.freepik.com/free-photo/aesthetic-retro-vaporwave-landscape_23-2148949193.jpg?t=st=1728656690~exp=1728660290~hmac=a28ef7809babe305ed30c6c74dff411d0f19f3708ab5509ba2e176c8c780815d&w=996",
    },
    {
      id: 5,
      title: "Card 5",
      description: "This is the description for card .",
      image:
        "https://img.freepik.com/free-photo/colorful-retro-vaporwave-landscape_23-2148949190.jpg?t=st=1728656713~exp=1728660313~hmac=bc30cebc9d3c11b76c6866098cf090eba23d8ee64511f9b81727de08f92137c5&w=996",
    },
    {
      id: 6,
      title: "Card 6",
      description: "This is the description for card .",
      image:
        "https://img.freepik.com/free-photo/wooden-frame-with-purple-flowers-it_1340-24841.jpg?t=st=1728657120~exp=1728660720~hmac=b6b5fa63334e226fb50f273946f96a0e651c071bb96cf192fc4617051b76924f&w=996",
    },
    {
      id: 7,
      title: "Card 7",
      description: "This is the description for card .",
      image:
        "https://img.freepik.com/free-photo/landscape-with-calm-sea_1048-4777.jpg?t=st=1728657019~exp=1728660619~hmac=45c1571db6e31fb177b2759db7ce659eb6a8f1f7a737e189fd3975b0b0c5b9d6&w=1060",
    },
    {
      id: 8,
      title: "Card 8",
      description: "This is the description for card .",
      image:
        "https://img.freepik.com/free-photo/idea-sunlight-floral-beach-nature_1203-5085.jpg?t=st=1728656992~exp=1728660592~hmac=ebb22880d61bd8c088051ef9d6ed44005c66b97a22298682c34ef6fc46b3068b&w=996",
    },
    {
      id: 9,
      title: "Card 9",
      description: "This is the description for card .",
      image:
        "https://img.freepik.com/free-photo/autumn-leaf-falling-revealing-intricate-leaf-vein-generated-by-ai_188544-9869.jpg?t=st=1728656855~exp=1728660455~hmac=071e209e6598168805e8f066eb8ad11716c85716f97efb34afcd364140bfeb90&w=1060",
    },
    {
      id: 10,
      title: "Card 10",
      description: "This is the description for card .",
      image:
        "https://img.freepik.com/free-photo/magenta-nature-fantasy-landscape_23-2150693721.jpg?t=st=1728656903~exp=1728660503~hmac=fb09381b4104d5f5105d7b0be19de065ff6ee794bdc6a32553b0e0930260da69&w=1060",
    },
    {
      id: 11,
      title: "Card 11",
      description: "This is the description for card .",
      image:
        "https://img.freepik.com/free-photo/landscape-with-calm-sea_1048-4777.jpg?t=st=1728657019~exp=1728660619~hmac=45c1571db6e31fb177b2759db7ce659eb6a8f1f7a737e189fd3975b0b0c5b9d6&w=1060",
    },
    {
      id: 12,
      title: "Card 12",
      description: "This is the description for card .",
      image:
        "https://img.freepik.com/free-photo/big-ukrainian-river-dnepr-covered-by-cyanobacterias-as-result-hot-summers_1127-3008.jpg?t=st=1728656820~exp=1728660420~hmac=0630802809347ba1d394f3b3fcf69d57a2f7a65fc5df4accdf681d230aa9dc9f&w=996",
    },
  ];

  return (
    <div className="card-container">
      {cardData.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          image={card.image}
        />
      ))}
    </div>
  );
};

export default App;
