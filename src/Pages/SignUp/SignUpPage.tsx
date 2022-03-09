import React, { ReactElement } from "react";
import SignUpForm from "../../Components/Forms/SignUpForm/SignUpForm";

import styles from "./SignUp.module.scss";

function SignUpPage(): ReactElement {
  return (
    <section id="login-page" className={styles.signup_page}>
      <div className={styles.login_overlay} />
      <SignUpForm />
    </section>
  );
}

export default SignUpPage;
