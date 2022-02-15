/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useLayoutEffect, useRef } from "react";
import stylesTwo from "./LabelInputV2.module.css";

function LabelInputV2() {
  const emailGroupRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    const { current } = inputRef;

    const handleFocus = () => {
      emailGroupRef.current?.classList.add(stylesTwo.active);
    };
    const handleBlur = () => {
      emailGroupRef.current?.classList.remove(stylesTwo.active);
    };

    current?.addEventListener("focus", handleFocus);
    current?.addEventListener("blur", handleBlur);

    return () => {
      current?.removeEventListener("focus", handleFocus);
      current?.removeEventListener("blur", handleBlur);
    };
  }, []);

  return (
    <div ref={emailGroupRef} className={stylesTwo.inputGroup}>
      <label htmlFor="email" className={stylesTwo.label}>
        Email
      </label>
      <input
        ref={inputRef}
        className={stylesTwo.input}
        type="email"
        id="email"
      />
    </div>
  );
}

export default LabelInputV2;
