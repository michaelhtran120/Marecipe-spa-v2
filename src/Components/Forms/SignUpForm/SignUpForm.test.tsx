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

  test("Header renders", () => {
    const header = screen.getByRole("heading", {
      name: /Sign up with MaRecipe/,
    });
    expect(header).toBeInTheDocument();
  });

  test("Form renders labels correctly", () => {
    const firstNameLabel = screen.getByLabelText(/First Name/);
    const lastNameLabel = screen.getByLabelText(/Last Name/);
    const emailLabel = screen.getByLabelText(/E\-mail Address/);
    const passwordLabel = screen.getByLabelText(/^Password/);
    const confirmPasswordLabel = screen.getByLabelText(/^Confirm/);
    expect(
      firstNameLabel &&
        lastNameLabel &&
        emailLabel &&
        passwordLabel &&
        confirmPasswordLabel
    ).toBeInTheDocument();
  });

  test("All inputs render", () => {
    const inputs = screen.getAllByTestId("input");
    expect(inputs.length).toBe(5);
  });

  test("Sign Up Button renders", () => {
    const signUpBtn = screen.getByRole("button", { name: /Sign Up/i });
    expect(signUpBtn).toBeInTheDocument();
  });

  test("Log In Link renders", () => {
    const logInLink = screen.getByRole("link", { name: /Log in/i });
    expect(logInLink).toBeInTheDocument();
  });
});
