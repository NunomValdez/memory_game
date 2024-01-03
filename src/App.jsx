import { useState, useEffect } from "react";
// import { createClient } from "pexels";
import * as mockedData from "./mocked_data_pexels.json";
import GameBoard from "./components/GameBoard";

// const API_KEY = import.meta.env.VITE_API_PEXELS_TOKEN;
// const client = createClient(API_KEY);

//FIXME: uncomment all this when saving the app to GitHub!

function App() {
  const [data, setData] = useState(null);
  const [imageClicked, setImageClicked] = useState(null);
  const [isPair, setIsPair] = useState(false);
  // const [visibleImages, setVisibleImages] = useState({});

  const imagesArray = data?.length > 0 && [...data];
  const duplicatedImagesArray =
    imagesArray.length > 0 ? [...imagesArray, ...imagesArray] : [];
  // Shuffle the images for the memory game
  // duplicatedImagesArray.sort(() => Math.random() - 0.5);

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
        // setImageClicked(initialVisibility);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const handleImageClick = (e, photo) => {
    console.log(photo);
    setImageClicked(photo.id);
    imageClicked !== null && photo.id === imageClicked
      ? setIsPair(true)
      : setIsPair(false);
  };

  return (
    <div className="py-10 flex flex-col justify-center items-center">
      <GameBoard
        data={data}
        duplicatedImagesArray={duplicatedImagesArray}
        handleImageClick={handleImageClick}
      />
      {isPair && <p>This is a pair</p>}
    </div>
  );
}

export default App;
