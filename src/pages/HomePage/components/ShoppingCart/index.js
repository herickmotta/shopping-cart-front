import React from "react";
import Button from "../../../../components/Button";
import CartProductSnippet from "./components/CartProductSnippet";
import DiscountSection from "./components/DiscountSection";
import { Container, CartBox, CartProducts } from "./styles";

export default function ShoppingCart() {
  return (
    <Container>
      <CartBox>
        <h1>Shopping Cart</h1>
        <CartProducts>
          <CartProductSnippet />
          <CartProductSnippet />
          <DiscountSection />
        </CartProducts>
      </CartBox>
      <Button>CHECKOUT</Button>
    </Container>
  );
}
