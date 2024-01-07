import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ContextProvider from "./context-provider/ContextProvider.jsx";
import {
  BrowserRouter,
  // Routes,
  // Route,
  // RouterProvider,
  // createBrowserRouter,
  // createRoutesFromElements,
} from "react-router-dom";
import GameApp from "./GameApp.jsx";
// // import UserNameForm from "./components/UserNameForm.jsx";
// import ScoreModal from "./components/timer/ScoreModal.jsx";
// import Layout from "./Layout.jsx";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route index path="/" element={<Layout />} />
//       <Route path="game/" element={<GameApp />} />
//         <Route path="scores" element={<ScoreModal />} />
//       </Route >
//     </>
//   )
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <GameApp />
        {/* <RouterProvider router={router} /> */}
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
