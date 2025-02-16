import Logo from "./Logo";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const Nav = () => {
  return (
    <nav className="dark:bg-gray-900 bg-gray-300 text-gray-100 flex justify-center items-center py-4 px-8 sm:px-12 lg:px-24">
      <div className="flex items-center gap-8">
        <div style={{ width: '50px', height: '50px', backgroundColor: 'black', borderRadius: '50%' }}>
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