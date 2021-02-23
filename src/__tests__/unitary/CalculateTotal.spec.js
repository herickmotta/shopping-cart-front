/* eslint-disable no-undef */
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import CartContext from "../../contexts/CartContext";
import CalculateTotal from "../../pages/HomePage/components/ShoppingCart/components/CalculateTotal";

describe("Testing CalculateTotal ", () => {
  it("should calculate subtotal correct", async () => {
    const cart = [
      {
        product: {
          name: "banana",
          price: 30,
          available: 1,
        },
        quantity: 2,
      },
    ];
    render(
      <CartContext.Provider value={{ cart }}>
        <CalculateTotal />
      </CartContext.Provider>
    );

    await waitFor(() =>
      expect(screen.getByTestId("sbt-field")).toHaveTextContent("$ 60")
    );
  });

  it("should calculate standard shipping price", async () => {
    const cart = [
      {
        product: {
          name: "banana",
          price: 30,
          available: 1,
        },
        quantity: 2,
      },
    ];
    render(
      <CartContext.Provider value={{ cart }}>
        <CalculateTotal />
      </CartContext.Provider>
    );

    await waitFor(() =>
      expect(screen.getByTestId("ship-field")).toHaveTextContent("$ 30")
    );
  });

  it("should calculate special shipping price", async () => {
    const cart = [
      {
        product: {
          name: "banana",
          price: 1,
          available: 1,
        },
        quantity: 15,
      },
    ];
    render(
      <CartContext.Provider value={{ cart }}>
        <CalculateTotal />
      </CartContext.Provider>
    );

    await waitFor(() =>
      expect(screen.getByTestId("ship-field")).toHaveTextContent("$ 37")
    );
  });

  it("should give free shipping if subtotal > 400", async () => {
    const cart = [
      {
        product: {
          name: "banana",
          price: 50,
          available: 1,
        },
        quantity: 9,
      },
    ];
    render(
      <CartContext.Provider value={{ cart }}>
        <CalculateTotal />
      </CartContext.Provider>
    );

    await waitFor(() =>
      expect(screen.getByTestId("ship-field")).toHaveTextContent("$ 0")
    );
  });

  it("should give free shipping if subtotal matches shipping voucher value", async () => {
    const voucher = {
      id: 1,
      code: "#SHIPIT",
      type: "shipping",
      amount: 0,
      minValue: 50,
    };
    const cart = [
      {
        product: {
          name: "banana",
          price: 50,
          available: 1,
        },
        quantity: 2,
      },
    ];
    render(
      <CartContext.Provider value={{ cart, voucher }}>
        <CalculateTotal />
      </CartContext.Provider>
    );

    await waitFor(() =>
      expect(screen.getByTestId("ship-field")).toHaveTextContent("$ 0")
    );
  });

  it("should apply a percent voucher correctly", async () => {
    const voucher = {
      id: 1,
      code: "#10OFF",
      type: "percentual",
      amount: 10,
    };
    const cart = [
      {
        product: {
          name: "banana",
          price: 50,
          available: 1,
        },
        quantity: 2,
      },
    ];
    render(
      <CartContext.Provider value={{ cart, voucher }}>
        <CalculateTotal />
      </CartContext.Provider>
    );
    await waitFor(() =>
      expect(screen.getByTestId("disc-field")).toHaveTextContent("$ 10")
    );
  });

  it("should apply a fixed value voucher correctly", async () => {
    const voucher = {
      id: 1,
      code: "#100DOLLARS",
      type: "fixed",
      amount: 100,
    };
    const cart = [
      {
        product: {
          name: "banana",
          price: 50,
          available: 1,
        },
        quantity: 2,
      },
    ];
    render(
      <CartContext.Provider value={{ cart, voucher }}>
        <CalculateTotal />
      </CartContext.Provider>
    );
    await waitFor(() =>
      expect(screen.getByTestId("disc-field")).toHaveTextContent("$ 100")
    );
  });

  it("should calculate total properly", async () => {
    const voucher = {
      id: 1,
      code: "#100DOLLARS",
      type: "fixed",
      amount: 50,
    };
    const cart = [
      {
        product: {
          name: "banana",
          price: 100,
          available: 1,
        },
        quantity: 2,
      },
    ];
    render(
      <CartContext.Provider value={{ cart, voucher }}>
        <CalculateTotal />
      </CartContext.Provider>
    );
    await waitFor(() =>
      expect(screen.getByTestId("ttl-field")).toHaveTextContent("$ 180")
    );
  });
});
