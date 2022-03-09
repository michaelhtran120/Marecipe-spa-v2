// Library imports
import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

// Style imports
import styles from "./DesktopNavbar.module.scss";

// Asset imports
import { ReactComponent as MainHeaderLogo } from "../../../assets/images/logo.svg";
import LoginButton from "../LoginButton/LoginButton";

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

function DesktopNavbar(): ReactElement | null {
  return (
    <div className={styles.navbar_container}>
      <nav className={styles.navbar_left_links}>
        <Link to="/">
          <MainHeaderLogo className={styles.header_logo} />
        </Link>
        <ul>
          <NavLink path="/recipe" textContent="Recipe" />
          <NavLink path="/shopping" textContent="Shopping" />
        </ul>
      </nav>
      <nav className={styles.navbar_right_links}>
        <ul>
          <li>
            <LoginButton />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default DesktopNavbar;
