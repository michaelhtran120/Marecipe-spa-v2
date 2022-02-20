// React & Library imports
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// Component imports

import Button from "../../Buttons/Button";
import LabelInput from "../../LabelInput/LabelInput";

// Style import
import styles from "./SignUpForm.module.css";

function SignUpForm() {
  const [inputs, setInputs] = useState({
    first_name: "",
    last_name: "",
    signup_email: "",
    signup_password: "",
    password_confirm: "",
  });
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSignUp = (event: SubmitEvent) => {
    // event.preventDefault();
    console.log("logging in", event);
  };

  return (
    <form className={styles.signup_form}>
      <h1>
        Sign up with
        <br />
        <span>MaRecipe</span>
      </h1>
      <div className={styles.name_form_group}>
        <LabelInput
          inputId="first_name"
          label="First Name"
          type="text"
          handleChange={handleChange}
          required
        />
        <LabelInput
          inputId="last_name"
          label="Last Name"
          type="text"
          handleChange={handleChange}
          required
        />
      </div>
      <LabelInput
        inputId="signup_email"
        label="E-mail address"
        type="email"
        handleChange={handleChange}
        required
      />
      <LabelInput
        inputId="signup_password"
        label="Password"
        type="password"
        handleChange={handleChange}
        required
      />
      <LabelInput
        inputId="password"
        label="Confirm Password"
        type="password"
        handleChange={handleChange}
        required
      />
      <Button
        variant="primary"
        handleClick={(event: SubmitEvent) => handleSignUp(event)}
        submit
      >
        Sign Up
      </Button>

      <br />
      <p>
        Already have an account?
        <br />
        Click here to <NavLink to="/login">Log In</NavLink>
      </p>
    </form>
  );
}
export default SignUpForm;
