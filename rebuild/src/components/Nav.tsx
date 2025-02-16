import  Logo  from "./Logo";
import { ThemeToggle } from "./ThemeToggle"
import { useStore } from '@nanostores/react';
import { theme } from '../store/theme';

export const Nav = () => {
  const $theme = useStore(theme);
  return (
    <nav className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 px-4">
      <div style={{ width: '50px', height: '50px', backgroundColor: 'black', borderRadius: '50%'}}>
        <Logo />
      </div>
      <div className="flex gap-2">
        <a href="/" className="text-lg sm:text-xl">
          Home
        </a>
        <a href="/" className="text-lg sm:text-xl">
          About
        </a>
        <a href="/" className="text-lg sm:text-xl">
          Contact
        </a>
      </div>
      <ThemeToggle />
    </nav>
  );
};