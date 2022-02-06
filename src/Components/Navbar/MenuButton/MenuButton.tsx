import React, { useState } from "react";
import "./MenuButton.css";

function MenuButton() {
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
    <div
      role="button"
      tabIndex={0}
      className={`menu_btn ${isOpen ? "open" : ""}`}
      onClick={() => handleClick()}
      onKeyPress={handleKeyPress}
    >
      <div className="menu_btn_burger" />
    </div>
  );
}

export default MenuButton;
