/*TODO: Show Poke Matchup only when user is logged in
 *       Hide Login menu item once user is logged in */

import "./css/navbar.css";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center navbar-bg">
      <div className="m-4">
        <img
          src="../../assets/logo.svg"
          alt="PokéWorld Logo"
          className="w-16 lg:w-44 md:w-24"
        />
      </div>
      {/*TODO: Refactor this to map over li's using a loop */}
      {/*TODO: Hamburger menu on small screen sizes */}
      {/*TODO: On hover, highlight the current menu item */}
      <ul className="flex md:text-xl">
        <li className="mx-8 hover:cursor-pointer hover:underline">
          Generations
        </li>
        <li className="mx-8 hover:cursor-pointer hover:underline">Types</li>
        <li className="mx-8 hover:cursor-pointer hover:underline">
          Poké Matchup
        </li>
        <li className="mx-8 hover:cursor-pointer hover:underline">Login</li>
      </ul>
    </nav>
  );
};
