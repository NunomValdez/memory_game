import { useEffect, useRef, useContext } from "react";
import GameBoard from "./components/GameBoard";
import { GameContext } from "./context-provider/ContextProvider";
import Timer from "./components/timer/Timer";

function GameApp() {
  const { gameCards, setGameCards, winningPairs, setWinningPairs, timeScores } =
    useContext(GameContext);

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
      //If the user finds a match, we want them both to be flipped
      gameCards[currentPhotoIndex].isFlipped = true;
      gameCards[previousImageIndex.current].isFlipped = true;
      // setting an array of pairs, and if all pairs are matched, its a winner and the time stops
      setWinningPairs(() => [...winningPairs, gameCards[currentPhotoIndex].id]);
      setGameCards([...gameCards]);
    } else {
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

  return (
    <div className="flex h-screen dark:bg-slate-50">
      <section className="flex-1 pb-10 flex flex-col items-center">
        <Timer />
        <GameBoard
          duplicatedImagesArray={gameCards}
          handleImageClick={handleImageClick}
          timer={timeScores}
        />
      </section>
    </div>
  );
}
export default GameApp;
