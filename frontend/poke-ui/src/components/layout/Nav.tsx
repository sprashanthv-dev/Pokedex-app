import { useState } from "react";
import { NavLinks } from "./NavLinks.tsx";

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      {/*TODO: Hamburger menu on small screen sizes */}
      {/* Hamburger Menu and close icon */}
      <div className="hidden sm:flex">
        <NavLinks />
      </div>

      {/* Hamburger Menu */}
      <ul className="flex sm:hidden">
        {/* Show menu icon if it is not opened yet */}
        {!isMenuOpen && (
          <li className="cursor-pointer" onClick={toggleMenu}>
            <img src="../../assets/menu.svg" alt="Hamburger icon" />
          </li>
        )}
        {/* Show close icon if the menu was opened */}
        {isMenuOpen && (
          <>
            <li className="cursor-pointer" onClick={toggleMenu}>
              <img src="../../assets/x.svg" alt="Close icon" />
            </li>
            <NavLinks />
          </>
        )}
      </ul>
    </nav>
  );
};
