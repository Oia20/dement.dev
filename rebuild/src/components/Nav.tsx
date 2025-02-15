

export const Nav = () => {
  return (
    <nav className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 px-4">
      <div className="flex flex-col gap-2">
        <a href="/">Dement.dev</a>
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