import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import LoginForm from "./LoginForm";

function MockLoginForm() {
  return (
    <BrowserRouter>
      <LoginForm />
    </BrowserRouter>
  );
}

describe("Login Form", () => {
  beforeEach(() => {
    render(<MockLoginForm />);
  });

  afterEach(() => cleanup());

  test("Form renders labels correctly", () => {
    const emailLabel = screen.getByLabelText(/e\-mail/i);
    const passwordLabel = screen.getByLabelText(/password/i);
    expect(emailLabel && passwordLabel).toBeInTheDocument();
  });

  test("Both inputs render", () => {
    const inputs = screen.getAllByTestId("input");
    expect(inputs.length).toBe(2);
  });

  test("Login Button renders", () => {
    const loginBtn = screen.getByRole("button", { name: /log in/i });
    expect(loginBtn).toBeInTheDocument();
  });

  test("Sign Up Link renders", () => {
    const signUpLink = screen.getByRole("link", { name: /sign up/i });
    expect(signUpLink).toBeInTheDocument();
  });
});
