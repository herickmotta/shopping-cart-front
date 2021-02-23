import React, { useState, useEffect } from "react";
import { useCartContext } from "../../../../../../contexts/CartContext";
import Container from "./styles";

function CalculateTotal() {
  const { cart, voucher } = useCartContext();
  const [subTotal, setSubTotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [freeShippingValue, setFreeShippingValue] = useState(400);
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
    if (subTotal > freeShippingValue) {
      setShipping(0);
    } else if (totalWeight <= 10) {
      setShipping(30);
    } else {
      const aboveWeight = totalWeight - 10;
      const shippingCost = Math.floor(aboveWeight / 5) * 7 + 30;
      setShipping(shippingCost);
    }
  }

  function getDiscount() {
    if (!voucher) {
      setDiscount(0);
      return;
    }
    setFreeShippingValue(400);
    switch (voucher.type) {
      case "percentual":
        setDiscount(subTotal * (voucher.amount / 100));
        break;
      case "fixed":
        setDiscount(voucher.amount);
        break;
      case "shipping":
        setFreeShippingValue(voucher.minValue);
        setDiscount(0);
        break;
      default:
        setDiscount(0);
    }
  }

  function getTotal() {
    let totalSum = subTotal + shipping - discount;
    if (totalSum < 0) totalSum = 0;
    setTotal(totalSum);
  }

  useEffect(() => {
    getSubTotal();
  }, [cart]);

  useEffect(() => {
    getDiscount();
  }, [voucher, subTotal]);

  useEffect(() => {
    getShipping();
  }, [subTotal, freeShippingValue]);

  useEffect(() => {
    getTotal();
  }, [subTotal, discount, shipping]);

  return (
    <Container>
      <div>
        <span>Subtotal</span>
        <span data-testid="sbt-field">{`$ ${subTotal
          .toFixed(2)
          .replace(/\./g, ",")}`}</span>
      </div>
      <div>
        <span>Shipping</span>
        <span data-testid="ship-field">{`$ ${shipping
          .toFixed(2)
          .replace(/\./g, ",")}`}</span>
      </div>
      <div>
        <span>Discount</span>
        <span data-testid="disc-field">{`$ ${discount
          .toFixed(2)
          .replace(/\./g, ",")}`}</span>
      </div>
      <div className="total">
        <span>Total</span>
        <span data-testid="ttl-field">{`$ ${total
          .toFixed(2)
          .replace(/\./g, ",")}`}</span>
      </div>
    </Container>
  );
}

export default CalculateTotal;
