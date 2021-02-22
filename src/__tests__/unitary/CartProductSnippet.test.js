/* eslint-disable no-undef */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { CartProvider } from "../../contexts/CartContext";
import CartProductSnippet from "../../pages/HomePage/components/ShoppingCart/components/CartProducts/components/CartProductSnippet";

describe("Testing CartProductSnippet ", () => {
  it("Show be able to receive and show props", () => {
    const item = {
      product: { name: "banana", price: "30", available: 1 },
      quantity: 1,
    };
    render(
      <CartProvider>
        <CartProductSnippet item={item} />
      </CartProvider>
    );

    const name = screen.getByText(/banana/i);
    const price = screen.getByText(/30,00/i);
    const quantity = screen.getByText(/Quantity: 1 kg/i);

    expect(name).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(quantity).toBeInTheDocument();
  });

  it("should be able to add more quantity and update available", () => {
    const item = {
      product: { name: "banana", price: "30", available: 1 },
      quantity: 1,
    };
    render(
      <CartProvider>
        <CartProductSnippet item={item} />
      </CartProvider>
    );

    const addBtn = screen.getByTestId("add-btn");
    userEvent.click(addBtn);

    expect(item.quantity).toBe(2);
    expect(item.product.available).toBe(0);
  });

  it("should be able to remove quantity and update available", () => {
    const item = {
      product: { name: "banana", price: "30", available: 1 },
      quantity: 2,
    };
    render(
      <CartProvider>
        <CartProductSnippet item={item} />
      </CartProvider>
    );

    const rmvBtn = screen.getByTestId("rmv-btn");
    userEvent.click(rmvBtn);

    expect(item.quantity).toBe(1);
    expect(item.product.available).toBe(2);
  });
});
