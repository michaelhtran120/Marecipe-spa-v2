// Library imports
import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

// Style imports
import styles from "./Navbar.module.css";

type NavLinkProps = {
  path: string;
  textContent: string;
};

function NavLink({ path, textContent }: NavLinkProps) {
  return (
    <li>
      <Link to={path}>{textContent}</Link>
    </li>
  );
}

function Navbar(): ReactElement | null {
  return (
    <header className={styles["navbar-container"]}>
      <nav className={styles["navbar-left"]}>
        <h1>Logo Image Here</h1>
        <ul>
          <NavLink path="/" textContent="Home" />
          <li>
            <Link to="/recipe">Recipe</Link>
          </li>
          <li>
            <Link to="/shopping">Shopping</Link>
          </li>
        </ul>
      </nav>
      <nav className={styles["navbar-right"]}>
        <ul>
          <li>
            <Link to="/login">Log In</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
