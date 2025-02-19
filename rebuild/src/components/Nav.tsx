import Logo from "./Logo";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const Nav = () => {
  return (
    <nav className="sticky top-0 left-0 right-0 z-50 backdrop-blur-md bg-transparent bg-opacity-20 transition duration-500 ease-in-out dark:bg-transparent dark:bg-opacity-20 text-gray-900 py-4 px-8 sm:px-12 lg:px-16 flex justify-center">
      <div className="max-w-xl w-full flex items-center justify-between gap-8">
        <div className="h-[50px] w-[50px] rounded hover:cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          <Logo />
        </div>
        <div className="flex gap-4">
          <a href="/" className="text-sm font-light sm:text-lg dark:text-gray-400">
            Home
          </a>
          <a href="/" className="font-light text-sm sm:text-lg dark:text-gray-400">
            About
          </a>
          <a href="/" className="font-light text-sm sm:text-lg dark:text-gray-400">
            Contact
          </a>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
};