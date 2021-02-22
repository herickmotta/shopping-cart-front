import React, { useContext, createContext, useState } from "react";

const CartContext = createContext();

export default CartContext;

export function CartProvider(props) {
  const [cart, setCart] = useState([]);
  const [voucher, setVoucher] = useState(null);

  return (
    <CartContext.Provider
      {...props}
      value={{ cart, setCart, voucher, setVoucher }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }

  return context;
}
