/**
TODO: Refactor this to map over li's using a loop
TODO: On hover, highlight the current menu item
 */

export const NavLinks = () => {
  return (
    <ul className="sm:flex md:text-xl">
      <li className="mx-8 hover:cursor-pointer hover:underline">Generations</li>
      <li className="mx-8 hover:cursor-pointer hover:underline">Types</li>
      <li className="mx-8 hover:cursor-pointer hover:underline">
        Poké Matchup
      </li>
      <li className="mx-8 hover:cursor-pointer hover:underline">Login</li>
    </ul>
  );
};
