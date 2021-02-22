import React, { useState } from "react";
import Button from "../../../../../../components/Button";
import { useCartContext } from "../../../../../../contexts/CartContext";
import { Card, ImageBox, InfoBox } from "./styles";

export default function ProductCard({ product }) {
  const { name, price, available } = product;
  const { cart, setCart } = useCartContext();
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  function addProductToCart() {
    if (product.available <= 0) return;
    setLoading(true);
    setDisabled(true);
    setTimeout(() => {
      const isInCart = cart.find((o) => o.product.id === product.id);
      if (isInCart) {
        isInCart.quantity += 1;
        isInCart.product.available -= 1;
        setCart([...cart]);
      } else {
        product.available -= 1;
        setCart([...cart, { product, quantity: 1 }]);
      }
      setLoading(false);
      setDisabled(false);
    }, 500);
  }
  return (
    <Card>
      <ImageBox />
      <InfoBox>
        <h2>{name}</h2>
        <p>{`$ ${price},00/kg`}</p>
        <p>{`${available} kg left`}</p>
      </InfoBox>
      <Button
        width="100%"
        height="15%"
        text={available > 0 ? "BUY" : "NO STOCK"}
        onClick={addProductToCart}
        loading={loading}
        disabled={disabled}
      />
    </Card>
  );
}
