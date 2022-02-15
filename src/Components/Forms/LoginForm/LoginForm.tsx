// React & Library imports
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// Component imports
import Input from "../Input/Input";
import Label from "../Label/Label";
import Button from "../../Buttons/Button";

// Style import
import styles from "./LoginForm.module.css";

function LoginForm() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleLogin = (event: SubmitEvent) => {
    event.preventDefault();
    console.log("logging in");
  };

  return (
    <form className={styles.login_form}>
      <h1> Log In to MaRecipe</h1>
      <Label title="Email" inputId="login-email" />
      <Input
        inputId="login-email"
        placeholder="Enter email"
        type="email"
        handleChange={handleChange}
        value={inputs.email}
      />
      <Label title="Password" inputId="login-password" />
      <Input
        inputId="login-password"
        placeholder="Enter password"
        type="password"
        handleChange={handleChange}
        value={inputs.password}
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
        <NavLink to="/#">Forgot Password</NavLink>?
      </p>
    </form>
  );
}
// !NEED to clean up
export default LoginForm;
