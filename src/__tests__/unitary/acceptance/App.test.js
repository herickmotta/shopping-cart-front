/* eslint-disable no-undef */
import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../../../App";
import VouchersService from "../../../services/VouchersService";

describe("Testing API calls", () => {
  // as a user, i want to see products available
  // as a user, i want to sees why products didnt show
  it("it should get products and handling errors", async () => {
    const mockedVouchers = [
      { id: 1, code: "#30OFF", type: "percentual", amount: 30.0 },
    ];
    const spy = jest.spyOn(VouchersService, "getAll");
    spy.mockImplementation(() => mockedVouchers);

    render(<App />);

    const products = await waitFor(() =>
      screen.getByTestId("products-container")
    );

    expect(products.children.length).toBeTruthy();
  });
});
