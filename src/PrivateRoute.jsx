import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { GameContext } from "./context-provider/ContextProvider";

export default function PrivateRoute() {
  const { playerName } = useContext(GameContext);
  const storedPlayer = localStorage.getItem("playerName");

  if (!playerName || !storedPlayer) {
    // Redirect to UserNameForm if no player name or stored player is found
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
}
