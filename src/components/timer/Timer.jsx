/* eslint-disable react/prop-types */
// import ScoreModal from "./ScoreModal";
import { useEffect, useContext, useRef } from "react";
import { GameContext } from "../../context-provider/ContextProvider";

export default function Timer() {
  const {
    setRunTimer,
    setSeconds,
    winningPairs,
    playerName,
    setTimeScores,
    runTimer,
    seconds,
  } = useContext(GameContext);
  const winnerAddedRef = useRef(false);

  const startTimer = () => {
    console.log(
      "inside the starter timer function ____________________________________"
    );
    setRunTimer(true);
  };

  useEffect(() => {
    let interval;
    if (runTimer) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [runTimer, setSeconds]);

  const addWinnerData = (newWinnerData) => {
    try {
      const existingDataRaw = localStorage.getItem("winnerData");
      let existingData = existingDataRaw ? JSON.parse(existingDataRaw) : [];
      // Ensure existingData is an array
      if (!Array.isArray(existingData)) {
        existingData = [];
      }
      existingData.push(newWinnerData);
      localStorage.setItem("winnerData", JSON.stringify(existingData));
    } catch (error) {
      console.error("Error updating winner data:", error);
    }
  };

  useEffect(() => {
    if (winningPairs.length === 6 && !winnerAddedRef.current) {
      const newWinnerData = { player: playerName, time: seconds };
      addWinnerData(newWinnerData);
      setTimeScores((prevScores) => [...prevScores, newWinnerData]);
      setRunTimer(false);
      setSeconds(0);
      winnerAddedRef.current = true; // Mark that winner data has been added
    }
  }, [winningPairs.length]);

  // Reset the ref when the game restarts
  useEffect(() => {
    if (winningPairs.length === 0) {
      winnerAddedRef.current = false;
    }
  }, [winningPairs.length]);

  return (
    <>
      <h1 className="text-xl text-lime-950 mb-5">Are you ready? Click Start</h1>
      <div className="flex border border-spacing-0 p-2 border-indigo-200 rounded-2xl mb-10">
        <h2 className="text-xl text-indigo-800 pl-4">Timer</h2>
        <h3 className="text-xl px-4 text-indigo-800 underline underline-offset-4 ">
          {seconds}
        </h3>
        <div className="flex flex-col justify-around">
          <button
            className="border border-spacing-2 px-4 rounded-lg bg-lime-200 border-green-500 text-xl text-yellow-950 hover:bg-green-600 hover:text-white"
            onClick={startTimer}
          >
            Start
          </button>
        </div>
      </div>
    </>
  );
}
