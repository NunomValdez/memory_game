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

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<UserNameForm />} />
        <Route path="game" element={<GameApp />} />
        <Route path="game/scores" element={<ScoreModal />} />
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
