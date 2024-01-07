import { useEffect, useRef, useContext } from "react";
import GameBoard from "./components/GameBoard";
import { GameContext } from "./context-provider/ContextProvider";
import Timer from "./components/timer/Timer";
import { useLoaderData } from "react-router-dom";

function GameApp() {
  const {
    // gameCards,
    setGameCards,
    winningPairs,
    setWinningPairs,
    timeScores,
    runTimer,
  } = useContext(GameContext);

  const gameCards = useLoaderData();
  const previousImageIndex = useRef(-1);

  // Shuffle and reset the game board
  const shuffleAndResetBoard = () => {
    const shuffled = [...gameCards].sort(() => Math.random() - 0.5);
    shuffled.forEach((card) => (card.isFlipped = false));
    setGameCards(shuffled);
    setWinningPairs([]);
  };

  useEffect(() => {
    if (winningPairs.length === 6) {
      shuffleAndResetBoard();
    }
  }, [winningPairs, setGameCards, setWinningPairs]);

  const checkMatch = (currentPhotoIndex) => {
    // define the logic to show the card when is NOT a match as well, for 1sec, and then flip them again
    if (
      gameCards[previousImageIndex.current].id ===
        gameCards[currentPhotoIndex].id &&
      runTimer
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

    if (currentPhotoIndex !== previousImageIndex.current && runTimer) {
      if (previousImageIndex.current === -1) {
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
        {winningPairs.length === 6 && <h3>You&apos;re a Winner! </h3>}
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
