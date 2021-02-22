/* eslint-disable no-undef */
import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "../../src/components/Button";

describe("Testing button ", () => {
  it("should be able to show text prop", () => {
    render(<Button text="test" />);
    const buttonElement = screen.getByText(/test/i);
    expect(buttonElement).toBeInTheDocument();
  });
});
