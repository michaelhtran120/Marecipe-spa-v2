import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SignUpForm from "./SignUpForm";

function MockSignUpForm() {
  return (
    <BrowserRouter>
      <SignUpForm />
    </BrowserRouter>
  );
}

describe("SignUp Form", () => {
  beforeEach(() => {
    render(<MockSignUpForm />);
  });

  afterEach(() => cleanup());

  test("Form renders labels correctly", () => {
    const emailLabel = screen.getByLabelText(/e\-mail address/i);
    const passwordLabel = screen.getByLabelText(/^password/i);
    const confirmPasswordLabel = screen.getByLabelText(/^confirm/i);
    expect(
      emailLabel && passwordLabel && confirmPasswordLabel
    ).toBeInTheDocument();
  });

  // test("Both inputs render", () => {
  //   const inputs = screen.getAllByTestId("input");
  //   expect(inputs.length).toBe(5);
  // });

  // test("Login Button renders", () => {
  //   const loginBtn = screen.getByRole("button", { name: /log in/i });
  //   expect(loginBtn).toBeInTheDocument();
  // });

  // test("Sign Up Link renders", () => {
  //   const signUpLink = screen.getByRole("link", { name: /sign up/i });
  //   expect(signUpLink).toBeInTheDocument();
  // });
});
