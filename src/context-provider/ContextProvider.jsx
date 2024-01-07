/* eslint-disable react/prop-types */
import { useState, useEffect, createContext } from "react";
// import { createClient } from "pexels";
import * as mockedData from "../mocked_data_pexels.json";

export const GameContext = createContext({
  gameCards: [],
  setGameCards: () => {},
  winningPairs: [],
  setWinningPairs: () => {},
  playerName: "",
  setPlayerName: () => {},
  seconds: 0,
  setSeconds: () => {},
  runTimer: false,
  setRunTimer: () => {},
  timeScores: [],
  setTimeScores: () => {},
});

const ContextProvider = ({ children }) => {
  const [gameCards, setGameCards] = useState([]);
  const [winningPairs, setWinningPairs] = useState([]);
  const storedPlayerName = localStorage.getItem("playerName");
  const [playerName, setPlayerName] = useState(storedPlayerName);
  const [seconds, setSeconds] = useState(0);
  const [runTimer, setRunTimer] = useState(false);
  const [timeScores, setTimeScores] = useState([]);

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

        // const existingGameBoard =
        //   localStorage.setItem("gameBoard", shuffledGameBoard);
        setGameCards(shuffledGameBoard);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, [runTimer]);

  return (
    <GameContext.Provider
      value={{
        gameCards,
        setGameCards,
        winningPairs,
        setWinningPairs,
        playerName,
        setPlayerName,
        runTimer,
        seconds,
        setRunTimer,
        setSeconds,
        setTimeScores,
        timeScores,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default ContextProvider;

// export const gameboardDataLoader = () => {
//   // client.photos
//   //   .search({ query: "Nature", orientation: "square", per_page: 6 })
//   //   .then((collections) => {
//   //     setData(collections);
//   //   });
//   // setData(mockedData.photos);
//   // let initialVisibility = {};
//   // mockedData.photos.forEach((photo) => {
//   //   initialVisibility[`${photo.id}`]; //= false;
//   // });
//   // const imagesArray = data.length > 0 && [...data];
//   //FIXME: this must come from the PEXEL API in the future
//   const processedData = mockedData.photos.map((photo) => ({
//     ...photo,
//     isFlipped: false,
//     isDisabled: false,
//   }));
//   const shuffledGameBoard = JSON.parse(
//     JSON.stringify([...processedData, ...processedData])
//   ).sort(() => Math.random() - 0.5);

//   // const existingGameBoard =
//   //   localStorage.setItem("gameBoard", shuffledGameBoard);
//   return shuffledGameBoard;
// };
