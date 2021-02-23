/* eslint-disable no-undef */
import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import CartContext from "../../contexts/CartContext";
import ShoppingCart from "../../pages/HomePage/components/ShoppingCart";
import VouchersService from "../../services/VouchersService";

describe("Testing ShoppingCart ", () => {
  it("should'nt be able to checkout a empty cart", async () => {
    const cart = [];

    render(
      <CartContext.Provider value={{ cart }}>
        <ShoppingCart />
      </CartContext.Provider>
    );

    const checkout = await waitFor(() => screen.getByText("CHECKOUT"));
    fireEvent.click(checkout);
    expect(screen.getByText("Cart can't be empty")).toBeInTheDocument();
  });

  it("should be able to checkout", async () => {
    const cart = [
      {
        product: { id: 1, name: "banana", price: "30", available: 1 },
        quantity: 1,
      },
      {
        product: { id: 2, name: "banana", price: "30", available: 1 },
        quantity: 1,
      },
    ];
    const mockedVouchers = [
      { id: 1, code: "#30OFF", type: "percentual", amount: 30.0 },
    ];
    const spy = jest.spyOn(VouchersService, "getAll");
    spy.mockImplementation(() => mockedVouchers);
    render(
      <CartContext.Provider value={{ cart }}>
        <ShoppingCart />
      </CartContext.Provider>
    );

    const checkout = await waitFor(() => screen.getByText("CHECKOUT"));
    fireEvent.click(checkout);
    await waitFor(() =>
      expect(screen.getByText("ORDER MADE!")).toBeInTheDocument()
    );
  });
});
