import { useState, useEffect } from "react";
// import { createClient } from "pexels";
import * as mockedData from "./mocked_data_pexels.json";

// const API_KEY = import.meta.env.VITE_API_PEXELS_TOKEN;
// const client = createClient(API_KEY);

//FIXME: uncomment all this when saving the app to GitHub!

function App() {
  const [data, setData] = useState(null);
  const [imageClicked, setImageClicked] = useState(null);
  const [isPair, setIsPair] = useState(false);

  const imagesArray = data?.length > 0 && [...data];
  const duplicatedImagesArray =
    imagesArray.length > 0 ? [...imagesArray, ...imagesArray] : [];
  // Shuffle the images for the memory game
  // duplicatedImagesArray.sort(() => Math.random() - 0.5);
  console.log(duplicatedImagesArray);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // client.photos
        //   .search({ query: "Nature", orientation: "square", per_page: 6 })
        //   .then((collections) => {
        //     setData(collections);
        //   });
        setData(mockedData.photos);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const handleImageClick = (id) => {
    console.log(id);
    setImageClicked(id);
    imageClicked !== null && id === imageClicked ? setIsPair(true) : null;
  };

  return (
    <div className="p-10 flex flex-col">
      <h1 className="text-3xl font-bold underline">Memory Game!</h1>
      <div className="flex p-10">
        {data ? (
          <ol className="grid grid-rows-3 grid-cols-3 gap-8 justify-center justify-items-center p-4">
            {duplicatedImagesArray.map((photo, photoIndex) => (
              <li key={`${photo.id}${photoIndex}`}>
                <img
                  src={photo.src.small}
                  alt={photo.alt}
                  id={photo.id}
                  onClick={() => handleImageClick(photo.id)}
                  className=""
                />
              </li>
            ))}
          </ol>
        ) : (
          <p>Loading...</p>
        )}
        {isPair && <p>This is a pair</p>}
      </div>
    </div>
  );
}

export default App;
