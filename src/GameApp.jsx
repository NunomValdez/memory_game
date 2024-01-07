import { useEffect, useRef, useContext } from "react";
import {
  Routes,
  Route,
  Outlet,
  // RouterProvider,
  // createBrowserRouter,
  // createRoutesFromElements,
} from "react-router-dom";
// import ScoreModal from "./components/timer/ScoreModal";
import GameBoard from "./components/GameBoard";
import {
  GameContext,
  // gameboardDataLoader,
} from "./context-provider/ContextProvider";
import UserNameForm from "./components/UserNameForm";
import NavBar from "./components/NavBar";
import ScoreModal from "./components/timer/ScoreModal";
import Timer from "./components/timer/Timer";
import Header from "./components/Header";

function GameApp() {
  const {
    gameCards,
    setGameCards,
    winningPairs,
    setWinningPairs,
    // setPlayerName,
    timeScores,
    // setRunTimer,
    // seconds,
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
    // when the user wins, we must store the playerName and the time score somewhere (localstorage) to store it, and be able to show it on the <ScoreModal />
    // winningPairs.length === 6 && alert("Winner!");
  }

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path="/" element={<NavBar />}>
  //       <Route index element={<UserNameForm />} />
  //       <Route
  //         path="/game"
  //         loader={gameboardDataLoader}
  //         element={
  //           <GameBoard
  //             duplicatedImagesArray={gameCards}
  //             handleImageClick={handleImageClick}
  //           />
  //         }
  //       />
  //       <Route path="/scores" element={<ScoreModal />} />
  //     </Route>
  //   )
  // );

  return (
    <div className="flex h-screen dark:bg-slate-50">
      <NavBar />
      <section className="flex-1 py-10 flex flex-col items-center">
        <Header />
        <Routes>
          <Route path="/" element={<UserNameForm />} />
          <Route
            path="game"
            element={
              <>
                {" "}
                <Timer />
                <GameBoard
                  duplicatedImagesArray={gameCards}
                  handleImageClick={handleImageClick}
                  timer={timeScores}
                />
              </>
            }
          />
          <Route
            path="game/scores"
            element={<ScoreModal timerHistory={timeScores} />}
          />
        </Routes>
        <Outlet />
      </section>
    </div>
  );
}
export default GameApp;
