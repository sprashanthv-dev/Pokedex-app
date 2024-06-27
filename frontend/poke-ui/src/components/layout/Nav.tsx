import { useState } from "react";
import { NavLinks } from "./NavLinks.tsx";
import { useResizer } from "../../hooks/useResizer.ts";

//TODO: Add dark / light mode toggle
//TODO: Move Hamburger Menu Items to a new component
export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Extra small screen sizes
  const xsScreenWidth: number = 640;

  const currentScreenWidth = useResizer();

  // Close hamburger menu if it was opened and not closed in xs screen size
  if (currentScreenWidth > xsScreenWidth && isMenuOpen) {
    setIsMenuOpen(false);
  }

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
