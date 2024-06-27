import { useState } from "react";
import { NavLinks } from "./NavLinks.tsx";

//TODO: Add dark / light mode toggle
export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex-col sm:flex-row">
      <div className="hidden sm:flex">
        <NavLinks />
      </div>

      {/* Hamburger Menu */}
      <ul className="flex sm:hidden">
        {/* Show menu icon if it is not opened yet */}
        {!isMenuOpen ? (
          <li className="cursor-pointer" onClick={toggleMenu}>
            <img src="../../assets/menu.svg" alt="Hamburger icon" />
          </li>
        ) : (
          <>
            <li className="cursor-pointer" onClick={toggleMenu}>
              <img src="../../assets/x.svg" alt="Close icon" />
            </li>
            <div>
              <NavLinks />
            </div>
          </>
        )}
      </ul>
    </nav>
  );
};
