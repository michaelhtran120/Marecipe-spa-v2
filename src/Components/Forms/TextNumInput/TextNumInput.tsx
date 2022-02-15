import React from "react";

// Style import
import styles from "./TextNumInput.module.css";

type InputProps = {
  placeholder: string;
  type: string;
  inputId: string;
  handleChange: (event: any) => void;
  value: string | undefined;
};

function TextNumInput({
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

export default TextNumInput;
