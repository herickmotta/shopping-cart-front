import React from "react";
import Button from "../../../../components/Button";
import CartProductSnippet from "./components/CartProductSnippet";
import DiscountSection from "./components/DiscountSection";
import {
  Container,
  CartBox,
  CartProducts,
  CalculateTotal,
  ButtonBox,
} from "./styles";

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
        <CalculateTotal>
          <div>
            <span>Subtotal</span>
            <span>$ 234,00</span>
          </div>
          <div>
            <span>Shipping</span>
            <span>$ 234,00</span>
          </div>
          <div>
            <span>Discount</span>
            <span>$ 234,00</span>
          </div>
          <div className="total">
            <span>Total</span>
            <span>$ 234,00</span>
          </div>
        </CalculateTotal>
      </CartBox>
      <ButtonBox>
        <Button width="100%" height="100%" text="CHECKOUT" />
      </ButtonBox>
    </Container>
  );
}
