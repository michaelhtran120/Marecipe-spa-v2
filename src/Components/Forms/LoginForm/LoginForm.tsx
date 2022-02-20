// React & Library imports
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// Component imports

import Button from "../../Buttons/Button";

// Style import
import styles from "./LoginForm.module.css";
import LabelInput from "../../LabelInput/LabelInput";

function LoginForm() {
  const [inputs, setInputs] = useState({
    login_email: "",
    login_password: "",
  });
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleLogin = (event: SubmitEvent) => {
    // event.preventDefault();
    console.log("logging in", event);
  };

  return (
    <form className={styles.login_form}>
      <h1>
        Log In to <span>MaRecipe</span>
      </h1>
      <LabelInput
        inputId="login_email"
        label="E-mail address"
        type="email"
        handleChange={handleChange}
        required
        autocomplete="email"
      />
      <LabelInput
        inputId="login_password"
        label="Password"
        type="password"
        handleChange={handleChange}
        required
        autocomplete="current-password"
      />
      <Button
        variant="primary"
        handleClick={(event: SubmitEvent) => handleLogin(event)}
        submit
      >
        Log In
      </Button>

      <br />
      <p>
        Don&apos;t have an account? Click here to{" "}
        <NavLink to="/signup">sign up</NavLink>
      </p>
      <br />
      <p>
        <NavLink to="/forgot-password">Forgot Password</NavLink>?
      </p>
    </form>
  );
}
export default LoginForm;
