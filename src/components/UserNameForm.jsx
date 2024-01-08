import { useEffect, useState, useContext } from "react";
import { FormControl, Input } from "@mui/material";
import { GameContext } from "../context-provider/ContextProvider";
import { useNavigate } from "react-router-dom";

export default function UserNameForm() {
  const [userName, setUserName] = useState("");
  const { setPlayerName } = useContext(GameContext);
  const navigate = useNavigate();

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

  const handleNameSubmit = (event) => {
    event.preventDefault();
    setPlayerName(userName);
    localStorage.setItem("playerName", userName);
    setUserName("");
    navigate("/game");
  };

  return (
    <div className="flex justify-center items-center w-full h-[50%]">
      <form onSubmit={handleNameSubmit} required>
        <FormControl required>
          <label className="font-bold text-lg text-indigo-700">
            Hey there! What&apos;s your Name?
          </label>
          <Input
            value={userName}
            placeholder="Write your name here"
            onChange={handleInputChange}
            className="md:w-80 sm:w-64 mb-2 font-sans font-normal leading-5 px-3 py-2 rounded-lg shadow-md shadow-slate-100 dark:shadow-slate-900 focus:shadow-outline-purple dark:focus:shadow-outline-purple focus:shadow-lg border border-solid border-slate-400 hover:border-purple-500 dark:hover:border-purple-500 focus:border-purple-400 dark:focus:border-purple-500 dark:border-slate-600 bg-white dark:bg-slate-100 text-slate-900 dark:text-slate-300 focus-visible:outline-0"
          />
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-2 border border-indigo-700 rounded-md shadow transition duration-100 ease-in-out"
          >
            Save
          </button>
        </FormControl>
      </form>
    </div>
  );
}
