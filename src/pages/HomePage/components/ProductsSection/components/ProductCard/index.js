import React from "react";
import Button from "../../../../../../components/Button";
import { useCartContext } from "../../../../../../contexts/CartContext";
import { Card, ImageBox, InfoBox } from "./styles";

export default function ProductCard({ product }) {
  const { name, price, available } = product;
  const { cart, setCart } = useCartContext();

  function addProductToCart() {
    if (product.available <= 0) return;
    const isInCart = cart.find((o) => o.product.id === product.id);
    if (isInCart) {
      isInCart.quantity += 1;
      isInCart.product.available -= 1;
      setCart([...cart]);
    } else {
      product.available -= 1;
      setCart([...cart, { product, quantity: 1 }]);
    }
  }
  return (
    <Card>
      <ImageBox />
      <InfoBox>
        <h2>{name}</h2>
        <p>{`$ ${price},00/kg`}</p>
        <p>{`${available} kg left`}</p>
      </InfoBox>
      <Button width="100%" height="15%" text="BUY" onClick={addProductToCart} />
    </Card>
  );
}
