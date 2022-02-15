/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useLayoutEffect, useRef } from "react";
import styles from "./LabelInputV2.module.css";

type LabelInputProp = {
  inputId: string;
  label: string;
  type: string;
  handleChange: (event: any) => void;
};

function LabelInputV2({ inputId, label, type, handleChange }: LabelInputProp) {
  const labelInputGroupRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    const { current } = inputRef;

    const handleFocus = () => {
      labelInputGroupRef.current?.classList.add(styles.active);
    };
    const handleBlur = () => {
      if (current?.value === "") {
        labelInputGroupRef.current?.classList.remove(styles.active);
      }
    };

    current?.addEventListener("focus", handleFocus);
    current?.addEventListener("blur", handleBlur);

    return () => {
      current?.removeEventListener("focus", handleFocus);
      current?.removeEventListener("blur", handleBlur);
    };
  }, []);

  return (
    <div ref={labelInputGroupRef} className={styles.inputGroup}>
      <label htmlFor={inputId} className={styles.label}>
        {label}
      </label>
      <input
        ref={inputRef}
        className={styles.input}
        type={type}
        name={inputId}
        id={inputId}
        onChange={handleChange}
      />
    </div>
  );
}

export default LabelInputV2;
