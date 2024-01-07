/* eslint-disable react/prop-types */
import { useContext } from "react";
import { NavLink, Route, Outlet } from "react-router-dom";
import { GameContext } from "./context-provider/ContextProvider";
import UserNameForm from "./components/UserNameForm";

export default function PrivateRoute() {
  const { playerName } = useContext(GameContext);
  const isKnownUser = { playerName: playerName };

  return (
    <Route>
      {isKnownUser.playerName !== null ? (
        <Outlet />
      ) : (
        <NavLink to={<UserNameForm />} />
      )}
    </Route>
  );
}