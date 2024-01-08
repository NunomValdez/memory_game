import { useContext } from "react";
import { GameContext } from "../context-provider/ContextProvider";

export default function Header() {
  const { playerName } = useContext(GameContext);
  return (
    <h1 className="md:text-4xl sm:text-3xl font-bold text-blue-950 text-opacity-80 underline underline-offset-4">
      {`Welcome ${playerName === null ? "to the Memory Game!" : playerName}!`}
    </h1>
  );
}
