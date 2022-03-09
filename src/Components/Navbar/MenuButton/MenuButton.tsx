import React from "react";
import styles from "./MenuButton.module.scss";

type Props = {
  isOpen: boolean;
  handleClick: () => void;
  handleKeyPress: any;
};

function MenuButton({ isOpen, handleClick, handleKeyPress }: Props) {
  const openClass = isOpen ? styles.menu_btn_open : "";

  return (
    <div
      role="button"
      tabIndex={0}
      className={`${styles.menu_btn} ${openClass}`}
      onClick={() => handleClick()}
      onKeyPress={handleKeyPress}
    >
      <div className={styles.menu_btn_burger} />
    </div>
  );
}

export default MenuButton;
