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
import CartContext from "../../contexts/CartContext";
import CartProducts from "../../pages/HomePage/components/ShoppingCart/components/CartProducts";

describe("Testing CartProducts ", () => {
  it("should be able to receive cart and show products", async () => {
    const cart = [
      {
        product: { id: 1, name: "banana", price: "30", available: 1 },
        quantity: 5,
      },
      {
        product: { id: 2, name: "banana", price: "30", available: 1 },
        quantity: 5,
      },
    ];

    await act(async () => {
      render(
        <CartContext.Provider value={{ cart }}>
          <CartProducts />
        </CartContext.Provider>
      );
    });

    const listNode = await waitFor(() => screen.getByTestId("cart-list"));
    expect(listNode.children).toHaveLength(2);
  });

  it("should remove a children if quantity is 0", async () => {
    let cart = [
      {
        product: { id: 1, name: "banana", price: "30", available: 1 },
        quantity: 1,
      },
      {
        product: { id: 2, name: "banana", price: "30", available: 1 },
        quantity: 1,
      },
    ];
    function setCart(value) {
      cart = value;
    }

    const { rerender } = render(
      <CartContext.Provider value={{ cart, setCart }}>
        <CartProducts />
      </CartContext.Provider>
    );

    const AllRmvBtn = await waitFor(() => screen.getAllByTestId("rmv-btn"));
    fireEvent.click(AllRmvBtn[0]);
    rerender(
      <CartContext.Provider value={{ cart, setCart }}>
        <CartProducts />
      </CartContext.Provider>
    );
    const listNode = await waitFor(() => screen.getByTestId("cart-list"));
    expect(listNode.children).toHaveLength(1);
  });
});
