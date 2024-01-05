import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="flex flex-col justify-start w-40 bg-indigo-500 text-white h-lvh">
      <ul className="space-y-2 p-4 ">
        <li>
          <Link
            to="/"
            className="block px-2 hover:underline hover:underline-offset-[6px]  py-8 rounded hover:bg-indigo-600 transition duration-200 text-xl"
          >
            User
          </Link>
        </li>
        <li>
          <Link
            to="/game"
            className="block px-2 hover:underline hover:underline-offset-[6px]  py-8 rounded hover:bg-indigo-600 transition duration-200 text-xl"
          >
            Let&apos;s Play
          </Link>
        </li>
        <li>
          <Link
            to="/game/scores"
            className="block px-2 hover:underline hover:underline-offset-[6px]  py-8 rounded hover:bg-indigo-600 transition duration-200 text-xl"
          >
            Scores
          </Link>
        </li>
      </ul>
    </nav>
  );
}
