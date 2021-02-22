import React, { useState, useEffect } from "react";
import { useCartContext } from "../../../../../../contexts/CartContext";
import Container from "./styles";

function CalculateTotal() {
  const { cart } = useCartContext();
  const [subTotal, setSubTotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);
  const [totalWeight, setTotalWeight] = useState(0);
  function getSubTotal() {
    let sum = 0;
    let weight = 0;
    cart.forEach((item) => {
      sum += item.product.price * item.quantity;
      weight += item.quantity;
    });
    setSubTotal(sum);
    setTotalWeight(weight);
  }
  function getShipping() {
    if (subTotal > 400) {
      setShipping(0);
    } else if (totalWeight <= 10) {
      setShipping(30);
    } else {
      const aboveWeight = totalWeight - 10;
      const shippingCost = Math.floor(aboveWeight / 5) * 7 + 30;
      setShipping(shippingCost);
    }
  }
  useEffect(() => {
    getSubTotal();
  }, [cart]);

  useEffect(() => {
    getShipping();
  }, [subTotal]);

  return (
    <Container>
      <div>
        <span>Subtotal</span>
        <span>{`$ ${subTotal}`}</span>
      </div>
      <div>
        <span>Shipping</span>
        <span>{`$ ${shipping}`}</span>
      </div>
      <div>
        <span>Discount</span>
        <span>{`$ ${discount}`}</span>
      </div>
      <div className="total">
        <span>Total</span>
        <span>{`$ ${total}`}</span>
      </div>
    </Container>
  );
}

export default CalculateTotal;
