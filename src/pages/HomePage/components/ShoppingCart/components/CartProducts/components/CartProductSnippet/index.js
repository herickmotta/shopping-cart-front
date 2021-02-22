import React from "react";
import { useCartContext } from "../../../../../../../../contexts/CartContext";
import { Box, ImageBox, InfoBox, AddOrRemoveItem } from "./styles";

export default function CartProductSnippet({ item }) {
  const { cart, setCart } = useCartContext();
  const { name, price } = item.product;

  function addQuantity() {
    if (item.product.available <= 0) return;
    item.quantity += 1;
    item.product.available -= 1;
    setCart([...cart]);
  }

  function removeQuantity() {
    item.quantity -= 1;
    item.product.available += 1;
    if (item.quantity <= 0) {
      const itemIndex = cart.findIndex((i) => i.product.id === item.product.id);
      if (itemIndex >= 0) {
        cart.splice(itemIndex, 1);
      }
    }
    setCart([...cart]);
  }
  return (
    <Box data-testid="cart-item">
      <ImageBox />
      <InfoBox>
        <h2>{name}</h2>
        <div>
          <p>{`Quantity: ${item.quantity} kg`}</p>
          <p>{`$ ${price},00`}</p>
        </div>
      </InfoBox>
      <AddOrRemoveItem>
        <button type="button" data-testid="add-btn" onClick={addQuantity}>
          +
        </button>
        <button type="button" data-testid="rmv-btn" onClick={removeQuantity}>
          -
        </button>
      </AddOrRemoveItem>
    </Box>
  );
}
