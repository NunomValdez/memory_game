import { useState, createContext } from "react";
import PropTypes from "prop-types";

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
ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ContextProvider;
