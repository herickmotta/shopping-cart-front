import React from "react";
import { useCartContext } from "../../../../../../contexts/CartContext";
import CartProductSnippet from "./components/CartProductSnippet";
import { EmptyCartBox, ProductsList } from "./styles";

export default function CartProducts() {
  const { cart } = useCartContext();
  return (
    <ProductsList data-testid="cart-list">
      {cart.length > 0 ? (
        cart.map((item) => (
          <CartProductSnippet item={item} key={item.product.id} />
        ))
      ) : (
        <EmptyCartBox>Add items to your cart</EmptyCartBox>
      )}
    </ProductsList>
  );
}
