import Logo from "./Logo";
import { ThemeSwitcher } from "./ThemeSwitcher";
import "./Nav.css"; // Import the CSS file

export const Nav = () => {
  const handleScroll = (event: any, targetId: string) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-transparent bg-opacity-20 transition duration-500 ease-in-out dark:bg-transparent dark:bg-opacity-20 text-gray-900 py-4 px-8 sm:px-12 lg:px-16 flex justify-center">
      <div className="max-w-xl w-full flex items-center justify-between gap-8">
        <div className="h-[50px] w-[50px] rounded hover:cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          <Logo />
        </div>
        <div className="flex gap-4">
          <a href="#work" onClick={(e) => handleScroll(e, "work")} className="font-light text-sm sm:text-lg dark:text-gray-400 hover:underline">
            Work
          </a>
          <a href="#projects" onClick={(e) => handleScroll(e, "projects")} className="font-light text-sm sm:text-lg dark:text-gray-400 hover:underline">
            Projects
          </a>
          <a href="#contact" onClick={(e) => handleScroll(e, "contact")} className="font-light text-sm sm:text-lg dark:text-gray-400 hover:underline">
            Contact
          </a>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
};