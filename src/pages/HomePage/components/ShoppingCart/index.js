import React from "react";
import Button from "../../../../components/Button";
import {
  Container,
  CartBox,
  CartProducts,
  DiscountSection,
  CalculateTotal,
} from "./styles";

export default function ShoppingCart() {
  return (
    <Container>
      <CartBox>
        <CartProducts />
        <DiscountSection />
        <CalculateTotal />
      </CartBox>
      <Button>CHECKOUT</Button>
    </Container>
  );
}
