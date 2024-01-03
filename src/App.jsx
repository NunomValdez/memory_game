import { useState, useEffect } from "react";
// import { createClient } from "pexels";
import * as mockedData from "./mocked_data_pexels.json";
import GameBoard from "./components/GameBoard";

// const API_KEY = import.meta.env.VITE_API_PEXELS_TOKEN;
// const client = createClient(API_KEY);

function App() {
  const [data, setData] = useState(mockedData.photos); //responsible for the data fetched from Pexel
  const [imageClicked, setImageClicked] = useState(null);
  const [gameCards, setGameCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // client.photos
        //   .search({ query: "Nature", orientation: "square", per_page: 6 })
        //   .then((collections) => {
        //     setData(collections);
        //   });
        setData(mockedData.photos);
        // let initialVisibility = {};
        // mockedData.photos.forEach((photo) => {
        //   initialVisibility[`${photo.id}`]; //= false;
        // });
        // const imagesArray = data.length > 0 && [...data];
        //FIXME: this must come from the PEXEL API in the future
        const processedData = mockedData.photos.map((photo) => ({
          ...photo,
          isFlipped: false,
          isDisabled: false,
        }));
        setGameCards([...processedData, ...processedData]);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  const handleImageClick = (photo, photoIndex) => {
    console.log(gameCards);
    setGameCards((prevGameCards) => {
      return prevGameCards.map((card, index) => {
        if (index === photoIndex) {
          return { ...card, isFlipped: true };
        }
        return card;
      });
    });

    setImageClicked(photo.id);

    if (imageClicked !== null && photo.id === imageClicked) {
      setGameCards((prevGameCards) => {
        return prevGameCards.map((card) => {
          if (card.id === imageClicked) {
            return { ...card, isDisabled: true };
          }
          return card;
        });
      });
    }
  };

  return (
    <section className="py-10 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold underline justify-center">
        Memory Game!
      </h1>
      <GameBoard
        // isPair={isPair}
        data={data}
        duplicatedImagesArray={gameCards}
        handleImageClick={handleImageClick}
      />
    </section>
  );
}

export default App;
