import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import LabelInput, { LabelInputProp } from "./LabelInput";

function MockLabelInput() {
  return (
    <BrowserRouter>
      <LabelInput
        inputId="email"
        label="E-Mail"
        type="email"
        handleChange={jest.fn()}
        required
      />
    </BrowserRouter>
  );
}

describe("Label & Input", () => {
  test("renders correctly", () => {
    render(<MockLabelInput />);

    const emailLabel = screen.getByLabelText(/e\-mail/i);
    expect(emailLabel).toBeInTheDocument();

    const input = screen.getByRole("textbox", { name: /e\-mail/i });
    expect(input).toBeInTheDocument();
  });
});
