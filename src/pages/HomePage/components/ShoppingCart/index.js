import React from "react";
import Button from "../../../../components/Button";
import { useCartContext } from "../../../../contexts/CartContext";
import CalculateTotal from "./components/CalculateTotal";
import CartProductSnippet from "./components/CartProductSnippet";
import DiscountSection from "./components/DiscountSection";
import {
  Container,
  CartBox,
  CartProducts,
  ButtonBox,
  EmptyCartBox,
} from "./styles";

export default function ShoppingCart() {
  const { cart } = useCartContext();
  return (
    <Container>
      <CartBox>
        <h1>Shopping Cart</h1>
        <CartProducts>
          {cart.length > 0 ? (
            cart.map((item) => <CartProductSnippet item={item} />)
          ) : (
            <EmptyCartBox>Add items to your cart</EmptyCartBox>
          )}
          <DiscountSection />
        </CartProducts>
        <CalculateTotal />
      </CartBox>
      <ButtonBox>
        <Button width="100%" height="100%" text="CHECKOUT" />
      </ButtonBox>
    </Container>
  );
}
