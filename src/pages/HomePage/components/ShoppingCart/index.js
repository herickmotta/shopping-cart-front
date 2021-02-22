import React, { useState, useEffect } from "react";
import Button from "../../../../components/Button";
import MessageBox from "../../../../components/MessageBox";
import { useCartContext } from "../../../../contexts/CartContext";
import CalculateTotal from "./components/CalculateTotal";
import CartProducts from "./components/CartProducts";
import DiscountSection from "./components/DiscountSection";
import { Container, CartBox, ButtonBox } from "./styles";

export default function ShoppingCart() {
  const { cart } = useCartContext();
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [buttonText, setButtonText] = useState("CHECKOUT");
  const [errorMessage, setErrorMessage] = useState(null);
  function checkout() {
    setLoading(true);
    setDisabled(true);
    if (cart.length === 0) {
      setErrorMessage("Cart can't be empty");
      setDisabled(false);
      setLoading(false);
    } else {
      setErrorMessage(null);
      setTimeout(() => {
        setButtonText("ORDER MADE!");
        setLoading(false);
      }, 500);
    }
  }
  useEffect(() => {
    setButtonText("CHECKOUT");
    setDisabled(false);
  }, [cart]);
  return (
    <Container>
      <CartBox>
        <h1>Shopping Cart</h1>
        <CartProducts />
        <DiscountSection />
        <CalculateTotal />
      </CartBox>

      <ButtonBox>
        <Button
          data-testid="checkout-btn"
          width="100%"
          height="100%"
          text={buttonText}
          onClick={checkout}
          loading={loading}
          disabled={disabled}
        />
      </ButtonBox>
      {errorMessage && <MessageBox text={errorMessage} isError />}
    </Container>
  );
}
