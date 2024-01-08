import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="flex flex-col justify-start md:w-[15%] sm:min-w-24 bg-indigo-300 text-white h-lvh pt-[5%] ">
      <ul className="space-y-2 p-4">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${
                isActive
                  ? "block bg-indigo-500 rounded-xl border border-spacing-4 border-gray-400 p-2 hover:underline hover:underline-offset-[6px] my-10 hover:bg-indigo-600 transition duration-100 md:md:text-xl sm:text-sm min-w-14"
                  : "block bg-indigo-400 rounded-xl border border-spacing-4 border-gray-300 p-2 hover:underline hover:underline-offset-[6px] my-10 hover:bg-indigo-600 transition duration-100 md:md:text-xl sm:text-sm min-w-14"
              }`
            }
          >
            User
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/game"
            className={({ isActive }) =>
              `${
                isActive
                  ? "block bg-indigo-500 rounded-xl border border-spacing-4 border-gray-400 p-2 hover:underline hover:underline-offset-[6px] my-10 hover:bg-indigo-600 transition duration-100 md:md:text-xl sm:text-sm min-w-14"
                  : "block bg-indigo-400 rounded-xl border border-spacing-4 border-gray-300 p-2 hover:underline hover:underline-offset-[6px] my-10 hover:bg-indigo-600 transition duration-100 md:md:text-xl sm:text-sm min-w-14"
              }`
            }
          >
            Let&apos;s Play!
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/game/scores"
            className={({ isActive }) =>
              `${
                isActive
                  ? "block bg-indigo-500 rounded-xl border border-spacing-4 border-gray-400 p-2 hover:underline hover:underline-offset-[6px] my-10 hover:bg-indigo-600 transition duration-100 md:md:text-xl sm:text-sm min-w-14"
                  : "block bg-indigo-400 rounded-xl border border-spacing-4 border-gray-300 p-2 hover:underline hover:underline-offset-[6px] my-10 hover:bg-indigo-600 transition duration-100 md:md:text-xl sm:text-sm min-w-14"
              }`
            }
          >
            Scores
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
