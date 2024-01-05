import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ContextProvider from "./context-provider/ContextProvider.jsx";
import { BrowserRouter } from "react-router-dom";
import GameApp from "./GameApp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <GameApp />
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
