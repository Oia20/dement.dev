import  Logo  from "./Logo";

export const Nav = () => {
  return (
    <nav className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 px-4">
      <div style={{ width: 'fit-content', height: 'fit-content', backgroundColor: 'red', borderRadius: '50%'}}>
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
    </nav>
  );
};