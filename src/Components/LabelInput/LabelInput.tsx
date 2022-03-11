/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useLayoutEffect, useRef } from "react";
import styles from "./LabelInput.module.scss";

export type LabelInputProp = {
  inputId: string;
  label: string;
  type: string;
  handleChange: (event: any) => void;
  required?: boolean;
  autocomplete?: string;
  dataId?: string;
};

function LabelInput({
  inputId,
  label,
  type,
  handleChange,
  required,
  autocomplete,
  dataId,
}: LabelInputProp) {
  const labelInputGroupRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useLayoutEffect(() => {
    function checkInput() {
      if (type === "textarea") {
        return textareaRef;
      }
      return inputRef;
    }

    const { current } = checkInput();

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
  }, [type]);

  return (
    <div ref={labelInputGroupRef} className={styles.inputGroup}>
      <label htmlFor={inputId} className={styles.label}>
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          ref={textareaRef}
          className={styles.textarea}
          name={inputId}
          id={inputId}
          onChange={handleChange}
          required={required}
          rows={6}
          maxLength={300}
        />
      ) : (
        <input
          data-testid="input"
          ref={inputRef}
          className={styles.input}
          type={type}
          name={inputId}
          id={inputId}
          onChange={handleChange}
          required={required}
          autoComplete={autocomplete}
          data-id={dataId}
        />
      )}
    </div>
  );
}

LabelInput.defaultProps = {
  required: false,
  dataId: null,
};

export default LabelInput;
