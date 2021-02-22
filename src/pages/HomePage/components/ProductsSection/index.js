/* eslint-disable no-alert */
import React, { useState, useEffect } from "react";
import MessageBox from "../../../../components/MessageBox";
import ProductsService from "../../../../services/ProductsService";
import ProductCard from "./components/ProductCard";
import Container from "./styles";

function ProductsSection() {
  const [products, setProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(async () => {
    const data = await ProductsService.getAll();
    if (data) {
      setProducts(data);
    } else {
      setErrorMessage("An error ocurred, please reload the page");
    }
  }, []);

  return (
    <Container>
      {products.map((p) => (
        <ProductCard product={p} key={p.id} />
      ))}
      {errorMessage && <MessageBox text={errorMessage} isError />}
    </Container>
  );
}

export default ProductsSection;
