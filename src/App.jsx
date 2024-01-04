import { useEffect, useRef, useContext } from "react";
import {
  Routes,
  Route,
  // Outlet, Link
} from "react-router-dom";
import ScoreModal from "./components/ScoreModal";
import UserNameForm from "./components/User";

import GameBoard from "./components/GameBoard";
import { GameContext } from "./context-provider/ContextProvider";

function App() {
  const {
    gameCards,
    setGameCards,
    winningPairs,
    setWinningPairs,
    // setPlayerName,
    playerName,
  } = useContext(GameContext);

  useEffect(() => {
    gameCards;
  }, [gameCards]);

  const previousImageIndex = useRef(-1);

  const checkMatch = (currentPhotoIndex) => {
    // define the logic to show the card when is NOT a match as well, for 1sec, and then flip them again
    if (
      gameCards[previousImageIndex.current].id ===
      gameCards[currentPhotoIndex].id
    ) {
      console.log("match");
      //If the user finds a match, we want them both to be flipped
      gameCards[currentPhotoIndex].isFlipped = true;
      gameCards[previousImageIndex.current].isFlipped = true;
      // setting an array of pairs, and if all pairs are matched, game is over and the time stops
      setWinningPairs(() => [...winningPairs, gameCards[currentPhotoIndex].id]);
      setGameCards([...gameCards]);
    } else {
      //if cards are not a match, I want them to show when clicked, and then if not a match, turn after 0.5sec
      gameCards[currentPhotoIndex].isFlipped = true;
      gameCards[previousImageIndex.current].isFlipped = false;
      setTimeout(() => {
        gameCards[currentPhotoIndex].isFlipped = false;
        gameCards[currentPhotoIndex].isFlipped = false;
      }, 500);
      setGameCards([...gameCards]);
      previousImageIndex.current = -1;
    }
  };

  const handleImageClick = (currentPhotoIndex) => {
    gameCards[currentPhotoIndex].isFlipped = true;

    if (currentPhotoIndex !== previousImageIndex.current) {
      if (previousImageIndex.current === -1) {
        console.log("IN");
        previousImageIndex.current = currentPhotoIndex;
        gameCards[currentPhotoIndex].isFlipped = true;
        setGameCards([...gameCards]);
      } else {
        checkMatch(currentPhotoIndex);
        previousImageIndex.current = -1;
      }
    } else {
      console.log("same card");
    }
  };
  {
    winningPairs.length === 6 && alert("Winner!");
  }

  return (
    <section className="py-10 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold underline justify-center">
        {`${playerName}'s Game`}
      </h1>
      <Routes>
        <Route
          path="/"
          element={
            <GameBoard
              duplicatedImagesArray={gameCards}
              handleImageClick={handleImageClick}
            />
          }
        />
        <Route path="user" element={<UserNameForm />} />
        <Route path="score" element={<ScoreModal />} />
      </Routes>
    </section>
  );
}
export default App;
