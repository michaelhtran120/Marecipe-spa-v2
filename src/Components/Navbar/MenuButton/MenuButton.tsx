import React from "react";
import "./MenuButton.css";

type Props = {
  isOpen: boolean;
  handleClick: () => void;
  handleKeyPress: any;
};

function MenuButton({ isOpen, handleClick, handleKeyPress }: Props) {
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
