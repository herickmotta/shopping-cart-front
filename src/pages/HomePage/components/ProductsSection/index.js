/* eslint-disable no-alert */
import React, { useState, useEffect } from "react";
import ProductsService from "../../../../services/ProductsService";
import ProductCard from "./components/ProductCard";
import Container from "./styles";

function ProductsSection() {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const data = await ProductsService.getAll();
    if (data) {
      setProducts(data);
    } else {
      alert("Products Error");
    }
  }, []);

  return (
    <Container>
      {products.map((p) => (
        <ProductCard
          name={p.name}
          price={p.price}
          available={p.available}
          key={p.id}
        />
      ))}
    </Container>
  );
}

export default ProductsSection;
