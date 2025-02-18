import Logo from "./Logo";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const Nav = () => {
  return (
    <nav className="transition duration-500 ease-in-out dark:bg-gray-900 bg-gray-300 text-gray-100 py-4 px-8 sm:px-12 lg:px-16 flex justify-center">
      <div className="max-w-xl w-full flex items-center justify-between gap-8">
        <div className="h-[50px] w-[50px] rounded">
          <Logo />
        </div>
        <div className="flex gap-4">
          <a href="/" className="text-lg sm:text-xl">
            Home
          </a>
          <a href="/" className="text-lg sm:text-xl">
            About
          </a>
          <a href="/" className="text-lg sm:text-xl">
            Contact
          </a>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
};