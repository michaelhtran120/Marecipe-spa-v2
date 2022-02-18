import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MobileNavbar.css";

import { ReactComponent as MainHeaderLogo } from "../../../assets/images/logo.svg";
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

  return (
    <nav className="navbar_container">
      <div className="header_static">
        <Link to="/">
          <MainHeaderLogo className="header_logo" />
        </Link>
        <MenuButton
          isOpen={isOpen}
          handleClick={handleClick}
          handleKeyPress={handleKeyPress}
        />
      </div>
      <nav className={`navbar_menu ${isOpen ? "open" : ""}`}>
        {isOpen ? (
          <>
            <Link to="/recipe">Recipe</Link>
            <Link to="/shopping">Shopping</Link>
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        ) : null}
      </nav>
    </nav>
  );
}

export default MobileNavbar;
