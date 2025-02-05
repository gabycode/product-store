import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  return (
    <div className="absolute w-full px-4 border-b border-slate-900/5 md:px-8  dark:border dark:border-gray-800">
      <div className="max-w-[1440px] mx-auto flex  items-center justify-between py-4 min-h-16 md:flex-row md:gap-4 dark:text-white">
        <Link to={"/"}>Product Store</Link>
        <div className="flex items-center gap-4">
          <Link
            to={"/create"}
            className="flex items-center gap-2 text-sm px-3 py-2 rounded-md text-white bg-indigo-600 font-semibold dark:bg-indigo-500">
            Create Product
          </Link>
          <button onClick={toggleDarkMode} className="flex items-center gap-2">
            {darkMode ? (
              <SunIcon className="size-6" aria-hidden="true" />
            ) : (
              <MoonIcon className="size-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
