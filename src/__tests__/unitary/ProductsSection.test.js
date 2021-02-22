/* eslint-disable no-undef */
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CartProvider } from "../../contexts/CartContext";
import ProductsSection from "../../pages/HomePage/components/ProductsSection";
import ProductsService from "../../services/ProductsService";

describe("Testing ProductsSection ", () => {
  it("should be able to receive and show products", async () => {
    const mockedProducts = [
      {
        id: 1,
        name: "banana",
        price: "30",
      },
      {
        id: 2,
        name: "apple",
        price: "30",
      },
    ];
    const spy = jest.spyOn(ProductsService, "getAll");
    spy.mockImplementation(() => mockedProducts);

    render(
      <CartProvider>
        <ProductsSection />
      </CartProvider>
    );

    const listNode = await waitFor(() =>
      screen.getByTestId("products-container")
    );
    expect(listNode.children).toHaveLength(2);
  });
});
