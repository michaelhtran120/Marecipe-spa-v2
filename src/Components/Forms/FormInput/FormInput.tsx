import React from "react";

// Style import
import styles from "./FormInput.module.css";

type InputProps = {
  placeholder: string;
  type: string;
  inputId: string;
  handleChange: () => void;
};

function FormInput({ placeholder, type, inputId, handleChange }: InputProps) {
  return (
    <input
      id={inputId}
      className={styles.form_input}
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}

export default FormInput;
