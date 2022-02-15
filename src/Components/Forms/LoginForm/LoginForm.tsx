import React, { useState } from "react";
import Input from "../Input/Input";
import Label from "../Label/Label";

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

  return (
    <form>
      <Label title="Email" inputId="email" />
      <Input
        inputId="email"
        placeholder="email"
        type="email"
        handleChange={handleChange}
        value={inputs.email}
      />
      <Label title="Password" inputId="password" />
      <Input
        inputId="password"
        placeholder="password"
        type="password"
        handleChange={handleChange}
        value={inputs.password}
      />
    </form>
  );
}

export default LoginForm;
