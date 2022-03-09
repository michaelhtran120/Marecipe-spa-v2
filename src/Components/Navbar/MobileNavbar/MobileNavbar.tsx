import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "./MobileNavbar.css";
import styles from "./MobileNavbar.module.scss";

import { ReactComponent as MainHeaderLogo } from "../../../assets/images/logo-light.svg";
import MenuButton from "../MenuButton/MenuButton";

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyPress = (event: any): void => {
    event.preventDefault();
    if (event.key === "Enter") {
      setIsOpen(!isOpen);
    }
  };

  // Conditionally render open
  const openClass = isOpen ? styles.navbar_menu_open : "";

  return (
    <nav className={styles.navbar_container}>
      <div className={styles.header_static}>
        <Link to="/">
          <MainHeaderLogo className={styles.header_logo} />
        </Link>
        <MenuButton
          isOpen={isOpen}
          handleClick={handleClick}
          handleKeyPress={handleKeyPress}
        />
      </div>
      <nav className={`${styles.navbar_menu} ${openClass}`}>
        <Link to="/recipe" onClick={handleClick}>
          Recipe
        </Link>
        <Link to="/shopping" onClick={handleClick}>
          Shopping
        </Link>
        <Link to="/login" onClick={handleClick}>
          Log In
        </Link>
        <Link to="/signup" onClick={handleClick}>
          Sign Up
        </Link>
      </nav>
    </nav>
  );
}

export default MobileNavbar;
