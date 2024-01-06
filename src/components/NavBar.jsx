import { Link, Outlet } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="flex flex-col justify-start md:w-[12%] sm:min-w-24 bg-indigo-500 text-white h-lvh pt-[5%] ">
      <ul className="space-y-2 p-4">
        <li>
          <Link
            to="/"
            className="block bg-indigo-400 rounded-xl border border-spacing-4 border-gray-300 p-2 hover:underline hover:underline-offset-[6px] my-10 hover:bg-indigo-600 transition duration-100 md:md:text-xl sm:text-sm min-w-14"
          >
            User
          </Link>
        </li>
        <li>
          <Link
            to="/game"
            className="block bg-indigo-400 rounded-xl border border-spacing-4 border-gray-300  p-2 hover:underline hover:underline-offset-[6px] my-10 hover:bg-indigo-600 transition duration-100 md:text-xl sm:text-sm min-w-14"
          >
            Let&apos;s Play!
          </Link>
        </li>
        <li>
          <Link
            to="/game/scores"
            className="block bg-indigo-400 rounded-xl border border-spacing-4 border-gray-300  p-2 hover:underline hover:underline-offset-[6px] my-10 hover:bg-indigo-600 transition duration-100 md:text-xl sm:text-sm min-w-14"
          >
            Scores
          </Link>
        </li>
      </ul>
      <Outlet />
    </nav>
  );
}
