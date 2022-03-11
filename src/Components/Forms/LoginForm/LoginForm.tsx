// React & Library imports
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// Component imports

import Button from "../../Buttons/Button";

// Style import
import styles from "./LoginForm.module.scss";
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
        Log In To
        <br />
        <span>MaRecipe</span>
      </h1>
      <LabelInput
        inputId="login_email"
        label="E-mail address"
        type="email"
        handleChange={handleChange}
        required
        autocomplete="email"
        value={inputs.login_email}
      />
      <LabelInput
        inputId="login_password"
        label="Password"
        type="password"
        handleChange={handleChange}
        required
        autocomplete="current-password"
        value={inputs.login_password}
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
        Don&apos;t have an account?{"   "}
        <NavLink to="/signup">Click here to sign up</NavLink>
      </p>
      <br />
      <p>
        <NavLink to="/forgot-password">Forgot Password</NavLink>?
      </p>
    </form>
  );
}
export default LoginForm;
