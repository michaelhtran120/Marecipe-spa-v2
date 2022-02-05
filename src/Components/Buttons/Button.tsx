import React from "react";

import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  primary?: boolean;
  handleClick: () => void;
};

function Button({ children, primary, handleClick }: ButtonProps): JSX.Element {
  return (
    <button
      type="button"
      className={`${styles.button} ${
        primary ? styles.primary : styles.secondary
      }`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  primary: false,
};

export default Button;
