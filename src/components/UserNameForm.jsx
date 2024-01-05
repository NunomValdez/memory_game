import { useEffect, useState, useContext } from "react";
import { FormControl, Input } from "@mui/material";
import { GameContext } from "../context-provider/ContextProvider";
// import NavBar from "./NavBar";

export default function UserNameForm() {
  const [userName, setUserName] = useState("");
  const { setPlayerName } = useContext(GameContext);

  useEffect(() => {
    const storedName = localStorage.getItem("playerName");
    if (storedName) {
      setUserName(storedName);
      setPlayerName(storedName);
    }
  }, [setPlayerName]);

  const handleInputChange = (event) => {
    setUserName(event.target.value);
  };

  const handleNameSubmit = () => {
    setPlayerName(userName);
    localStorage.setItem("playerName", userName);
    setUserName("");
  };

  return (
    <div className="flex justify-center items-center w-full h-[70%]">
      <FormControl required className="font-sans pt-52">
        <label className="font-bold text-lg text-indigo-700">
          Hey there! What&apos;s your Name?
        </label>
        <Input
          value={userName}
          placeholder="Write your name here"
          onChange={handleInputChange}
          className="w-80 font-sans font-normal leading-5 px-3 py-2 rounded-lg shadow-md shadow-slate-100 dark:shadow-slate-900 focus:shadow-outline-purple dark:focus:shadow-outline-purple focus:shadow-lg border border-solid border-slate-300 hover:border-purple-500 dark:hover:border-purple-500 focus:border-purple-400 dark:focus:border-purple-500 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-300 focus-visible:outline-0"
        />
        <button
          onClick={handleNameSubmit}
          type="submit"
          className="m-2 bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-2 px-4 border border-indigo-700 rounded-md shadow transition duration-200 ease-in-out"
        >
          Save
        </button>
      </FormControl>
    </div>
  );
}
