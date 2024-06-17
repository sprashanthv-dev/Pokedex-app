/*TODO: Show Poke Matchup only when user is logged in
 *       Hide Login menu item once user is logged in */
export const Navbar = () => {
  return (
    <nav>
      <img src="../../assets/logo.svg" alt="PokéWorld Logo" />
      <ul>
        <li>Generations</li>
        <li>Types</li>
        <li>Poké Matchup</li>
        <li>Login</li>
      </ul>
    </nav>
  );
};
