import React from "react";

// Style import
import styles from "./Input.module.css";

type InputProps = {
  placeholder: string;
  type: string;
  inputId: string;
  handleChange: (event: any) => void;
  value: string | undefined;
};

function Input({
  placeholder,
  type,
  inputId,
  handleChange,
  value,
}: InputProps) {
  return (
    <input
      id={inputId}
      name={inputId}
      className={styles.form_input}
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
    />
  );
}

export default Input;
