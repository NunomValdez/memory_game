import { NavLink } from "react-router-dom";

export default function NavBar() {
  const activeButtonStyles =
    "block bg-indigo-500 rounded-xl border border-spacing-4 border-gray-400 p-2 hover:underline hover:underline-offset-[6px] my-10 hover:bg-indigo-600 transition duration-100 md:md:text-xl sm:text-sm min-w-14";
  const inactiveButtonStyles =
    "block bg-indigo-400 rounded-xl border border-spacing-4 border-gray-300 p-2 hover:underline hover:underline-offset-[6px] my-10 hover:bg-indigo-600 transition duration-100 md:md:text-xl sm:text-sm min-w-14";

  return (
    <nav className="flex flex-col justify-start sm:w-[15%] md:w-[12%] bg-violet-700 text-white h-lvh pt-[5%] shadow-2xl shadow-orange-700">
      <ul className="space-y-2 p-4">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? activeButtonStyles : inactiveButtonStyles}`
            }
          >
            User
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/game"
            className={({ isActive }) =>
              `${isActive ? activeButtonStyles : inactiveButtonStyles}`
            }
          >
            Let&apos;s Play!
          </NavLink>
        </li>
        <li>
          <NavLink
            to="game/scores"
            className={({ isActive }) =>
              `${isActive ? activeButtonStyles : inactiveButtonStyles}`
            }
          >
            Scores
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"game/component"}
            className={({ isActive }) =>
              `${isActive ? activeButtonStyles : inactiveButtonStyles}`
            }
          >
            Component
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
