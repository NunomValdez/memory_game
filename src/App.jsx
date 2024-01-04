import { useState, useEffect, useRef } from "react";
// import { createClient } from "pexels";
import * as mockedData from "./mocked_data_pexels.json";
import GameBoard from "./components/GameBoard";

// const API_KEY = import.meta.env.VITE_API_PEXELS_TOKEN;
// const client = createClient(API_KEY);

function App() {
  // const [data, setData] = useState(mockedData.photos); //responsible for the data fetched from Pexel
  // const [imageClickedIndex, setImageClickedIndex] = useState(-1);
  const [gameCards, setGameCards] = useState([]);
  const previousIndex = useRef(-1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // client.photos
        //   .search({ query: "Nature", orientation: "square", per_page: 6 })
        //   .then((collections) => {
        //     setData(collections);
        //   });
        // setData(mockedData.photos);
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
        setGameCards(
          JSON.parse(JSON.stringify([...processedData, ...processedData]))
        );
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  console.log(gameCards);
  
  const handleImageClick = (photo, photoIndex) => {
    console.log("curr onhandle", photoIndex);
    console.log("prev onhandle", previousIndex.current);
    if (photoIndex !== previousIndex.current) {
      if (previousIndex.current === -1) {
        console.log("IN");
        previousIndex.current = photoIndex;

        // console.log(gameCards);
        // const updatedCards = [...gameCards];
        // console.log(updatedCards);
        // console.log(updatedCards[photoIndex]);
        // updatedCards[photoIndex].isFlipped = true;

        // setGameCards(updatedCards);
        gameCards[photoIndex].isFlipped = true;
        setGameCards([...gameCards]);

        // setGameCards((prevGameCards) => {
        //   return prevGameCards.map((card, index) => {
        //     if (index === photoIndex) {
        //       return { ...card, isFlipped: true };
        //     }
        //     return card;
        //   });
        // });
      } else {
        checkMatch(photoIndex);
        previousIndex.current = -1;
      }
    } else {
      console.log("same card");
    }

    // if (imageClicked !== null && photo.id === imageClicked) {
    //   setGameCards((prevGameCards) => {
    //     return prevGameCards.map((card) => {
    //       if (card.id === imageClicked) {
    //         return { ...card, isDisabled: true };
    //       }
    //       return card;
    //     });
    //   });
    // }
  };
  let pairCombinations = [];
  const checkMatch = (photoIndex) => {
    console.log("----------------");
    console.log("previousIndex", previousIndex.current);
    console.log("photoIndex", photoIndex);
    console.log("----------------");
    console.log({
      previous_photo: gameCards[previousIndex.current].id,
      current_photo: gameCards[photoIndex].id,
    });
    // define the logic to show the card when is NOT a match as well, for 1sec, and then flip them again
    if (gameCards[previousIndex.current].id === gameCards[photoIndex].id) {
      console.log("match");
      gameCards[photoIndex].isFlipped = true;
      pairCombinations.push(gameCards[photoIndex].id);
      setGameCards([...gameCards]);
    } else {
      gameCards[previousIndex.current].isFlipped = false;
      gameCards[photoIndex].isFlipped = false;
      setGameCards([...gameCards]);

      previousIndex.current = -1;
    }
    console.log(pairCombinations, "PAIR COMBINATIONS_______________________");
  };

  return (
    <section className="py-10 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold underline justify-center">
        Memory Game!
      </h1>
      <GameBoard
        // isPair={isPair}
        duplicatedImagesArray={gameCards}
        handleImageClick={handleImageClick}
      />
    </section>
  );
}

export default App;
