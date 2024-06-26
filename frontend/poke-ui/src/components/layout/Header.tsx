/*TODO: Show Poke Matchup only when user is logged in
 *       Hide Login menu item once user is logged in */

import "./css/navbar.css";

import { Logo } from "./Logo.tsx";
import { Nav } from "./Nav.tsx";

/**
 * Check if needed - flex-wrap top-0 sticky z-[20] w-full
 */

export const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center  navbar-bg  p-3">
      <Logo />
      <Nav />
    </header>
  );
};
