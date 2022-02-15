import React from "react";

// styles import
import styles from "./Label.module.css";

type LabelProp = {
  title: string;
  inputId: string;
};

function Label({ title, inputId }: LabelProp) {
  return (
    <label className={styles.form_label} htmlFor={inputId}>
      {title}
    </label>
  );
}

export default Label;
