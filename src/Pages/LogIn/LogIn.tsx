// React & library imports
import React, { ReactElement } from "react";

// Component import
import LoginForm from "../../Components/Forms/LoginForm/LoginForm";

// Styles Import
import styles from "./LogInPage.module.css";

function LogIn(): ReactElement {
  return (
    <section id="login-page" className={styles.login_page}>
      <div className={styles.login_overlay} />
      <LoginForm />
    </section>
  );
}

export default LogIn;
