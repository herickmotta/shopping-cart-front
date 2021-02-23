/* eslint-disable no-undef */
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../../components/Button";

describe("Testing button ", () => {
  it("should be able to show text prop", () => {
    render(<Button text="test" />);
    const buttonElement = screen.getByText(/test/i);
    expect(buttonElement).toBeInTheDocument();
  });
  it("should be able to receive onclick prop", (done) => {
    render(<Button onClick={() => done()} />);
    const button = screen.getByTestId("main-button");
    fireEvent.click(button);
  });
});
