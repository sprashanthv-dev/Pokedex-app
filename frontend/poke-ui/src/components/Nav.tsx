export const Nav = () => {
  return (
    <nav>
      {/*TODO: Refactor this to map over li's using a loop */}
      {/*TODO: Hamburger menu on small screen sizes */}
      {/*TODO: On hover, highlight the current menu item */}
      <ul className="hidden sm:flex md:text-xl">
        <li className="mx-8 hover:cursor-pointer hover:underline">
          Generations
        </li>
        <li className="mx-8 hover:cursor-pointer hover:underline">Types</li>
        <li className="mx-8 hover:cursor-pointer hover:underline">
          Poké Matchup
        </li>
        <li className="mx-8 hover:cursor-pointer hover:underline">Login</li>
      </ul>

      <ul className="flex sm:hidden">
        <li>
          <img src="../assets/menu.svg" alt="Hamburger icon" />
        </li>
      </ul>
    </nav>
  );
};
