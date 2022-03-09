// Library imports
import React from "react";
import { Link } from "react-router-dom";

// Styles import
import styles from "./LoginButton.module.scss";

function LoginButton() {
  return (
    <div className={styles["signin-li"]}>
      <Link to="/login" className={`${styles["signin-button-link"]} _button`}>
        <span>Sign In</span>
      </Link>
    </div>
  );
}

export default LoginButton;
