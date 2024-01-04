/* eslint-disable react/prop-types */
import { useState, useEffect, createContext } from "react";
// import { createClient } from "pexels";
// import * as mockedData from "./mocked_data_pexels.json";
import * as mockedData from "../mocked_data_pexels.json";

export const GameContext = createContext({
  gameCards: [],
  setGameCards: () => {},
  winningPairs: [],
  setWinningPairs: () => {},
  playerName: "",
  setPlayerName: () => {},
});

const ContextProvider = ({ children }) => {
  const [gameCards, setGameCards] = useState([]);
  const [winningPairs, setWinningPairs] = useState([]);
  const storedPlayerName = localStorage.getItem("playerName") ?? "Memory";
  const [playerName, setPlayerName] = useState(storedPlayerName);
  //   const previousIndex = useRef(-1);
  // const API_KEY = import.meta.env.VITE_API_PEXELS_TOKEN;
  // const client = createClient(API_KEY);

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
        const shuffledGameBoard = JSON.parse(
          JSON.stringify([...processedData, ...processedData])
        ).sort(() => Math.random() - 0.5);
        setGameCards(shuffledGameBoard);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <GameContext.Provider
      value={{
        gameCards,
        setGameCards,
        winningPairs,
        setWinningPairs,
        playerName,
        setPlayerName,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default ContextProvider;
