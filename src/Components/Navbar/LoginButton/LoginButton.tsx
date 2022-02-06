// Library imports
import React from "react";
import { Link } from "react-router-dom";

// Styles import
import styles from "./LoginButton.module.css";

function LoginButton() {
  return (
    <li className={styles["signin-li"]}>
      <Link to="/signin" className={`${styles["signin-button-link"]} _button`}>
        <span>Sign In</span>
      </Link>
    </li>
  );
}

export default LoginButton;
