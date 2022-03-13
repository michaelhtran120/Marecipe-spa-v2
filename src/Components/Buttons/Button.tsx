import React from "react";

import styles from "./Button.module.scss";

type ButtonProps = {
  children: React.ReactNode;
  variant: string;
  handleClick: (event?: any) => void;
  disabled?: boolean;
  submit?: boolean;
};

function Button({
  children,
  variant,
  handleClick,
  disabled,
  submit,
}: ButtonProps): JSX.Element {
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
      // case "danger-outline":
      //   return styles.danger_outline;
      default:
        return "";
    }
  };

  return (
    <button
      type={submit ? "submit" : "button"}
      className={`${styles.button} ${variantStyle()}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  disabled: false,
  submit: false,
};

export default Button;
