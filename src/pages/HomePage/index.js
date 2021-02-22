import React from "react";
import Header from "./components/Header";
import ProductsSection from "./components/ProductsSection";
import ShoppingCart from "./components/ShoppingCart";
import { Page, MainContent } from "./styles";

function HomePage() {
  return (
    <Page>
      <Header />
      <MainContent>
        <ProductsSection />
        <ShoppingCart />
      </MainContent>
    </Page>
  );
}

export default HomePage;
