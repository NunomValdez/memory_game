import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ContextProvider from "./context-provider/ContextProvider.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import GameApp from "./GameApp.jsx";
import ScoreModal from "./components/timer/ScoreModal.jsx";
import Layout from "./Layout.jsx";
import UserNameForm from "./components/UserNameForm.jsx";
import { gameboardDataLoader } from "./shared/loaderData";

const savedPlayer = localStorage.getItem("playerName");
console.log(savedPlayer);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<UserNameForm />} />
        <Route
          loader={gameboardDataLoader}
          path="game"
          element={
            savedPlayer !== null && savedPlayer !== "" ? (
              <GameApp />
            ) : (
              <UserNameForm />
            )
          }
        />
        <Route
          path="game/scores"
          element={
            savedPlayer !== null && savedPlayer !== "" ? (
              <ScoreModal />
            ) : (
              <UserNameForm />
            )
          }
        />
        <Route
          path="*"
          element={
            <div className="text-center text-2xl">Ups, page not Found</div>
          }
        />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);
