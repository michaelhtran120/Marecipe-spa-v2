import React from "react";

import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  variant: string;
  handleClick: () => void;
};

function Button({ children, variant, handleClick }: ButtonProps): JSX.Element {
  const variantStyle = () => {
    switch (variant) {
      case "primary":
        return styles.primary;
      case "secondary":
        return styles.secondary;
      case "danger":
        return styles.danger;
      case "primary-outline":
        return styles.primary_outline;
      case "secondary-outline":
        return styles.secondary_outline;
      case "danger-outline":
        return styles.danger_outline;
      default:
        return "";
    }
  };

  return (
    <button
      type="button"
      className={`${styles.button} ${variantStyle()}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default Button;
