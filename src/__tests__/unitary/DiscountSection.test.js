/* eslint-disable no-undef */
import React from "react";
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { CartProvider } from "../../contexts/CartContext";
import DiscountSection from "../../pages/HomePage/components/ShoppingCart/components/DiscountSection";
import VouchersService from "../../services/VouchersService";

describe("Testing DiscountSection ", () => {
  it("should be able to apply a voucher", async () => {
    const mockedVouchers = [
      { id: 1, code: "#30OFF", type: "percentual", amount: 30.0 },
    ];
    const spy = jest.spyOn(VouchersService, "getAll");
    spy.mockImplementation(() => mockedVouchers);
    await act(async () => {
      render(
        <CartProvider>
          <DiscountSection />
        </CartProvider>
      );
    });

    const input = screen.getByTestId("discount-input");
    const form = screen.getByTestId("discount-form");
    fireEvent.change(input, { target: { value: "#30OFF" } });
    fireEvent.submit(form);
    await waitFor(() =>
      expect(screen.getByText("Voucher Applied!")).toBeInTheDocument()
    );
  });

  it("should be able to warning a invalid voucher", async () => {
    const mockedVouchers = [
      { id: 1, code: "#30OFF", type: "percentual", amount: 30.0 },
    ];
    const spy = jest.spyOn(VouchersService, "getAll");
    spy.mockImplementation(() => mockedVouchers);
    await act(async () => {
      render(
        <CartProvider>
          <DiscountSection />
        </CartProvider>
      );
    });

    const input = screen.getByTestId("discount-input");
    const form = screen.getByTestId("discount-form");
    fireEvent.change(input, { target: { value: "invalid" } });
    fireEvent.submit(form);
    await waitFor(() =>
      expect(screen.getByText("Invalid voucher")).toBeInTheDocument()
    );
  });
});
