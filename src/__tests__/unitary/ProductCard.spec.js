/* eslint-disable no-undef */
import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductCard from "../../pages/HomePage/components/ProductsSection/components/ProductCard";
import { CartProvider } from "../../contexts/CartContext";

describe("Testing ProductCard ", () => {
  it("should be able to receive and show props", () => {
    const product = {
      name: "banana",
      price: 30,
      available: 1,
    };
    render(
      <CartProvider>
        <ProductCard product={product} />
      </CartProvider>
    );

    const name = screen.getByText(/banana/i);
    const price = screen.getByText(/30,00/i);
    const available = screen.getByText(/1 kg left/i);

    expect(name).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(available).toBeInTheDocument();
  });

  it("should be able to buy product", async () => {
    const product = {
      name: "banana",
      price: 30,
      available: 1,
    };
    render(
      <CartProvider>
        <ProductCard product={product} />
      </CartProvider>
    );

    const buyBtn = screen.getByText("BUY");
    fireEvent.click(buyBtn);
    await waitFor(() => {
      expect(product.available).toBe(0);
    });
  });

  it("should'n be able to buy a non stock product", async () => {
    const product = {
      name: "banana",
      price: 30,
      available: 0,
    };
    render(
      <CartProvider>
        <ProductCard product={product} />
      </CartProvider>
    );

    const buyBtn = screen.getByText("NO STOCK");
    fireEvent.click(buyBtn);
    await waitFor(() => {
      expect(product.available).toBe(0);
    });
  });
});
