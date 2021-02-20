import React from "react";
import Header from "./components/Header";
import ProductsSection from "./components/ProductsSection";
import ShoppingCart from "./components/ShoppingCart";
import { Page, MainContent } from "./styles";

const HomePage = () => (
  <Page>
    <Header />
    <MainContent>
      <ProductsSection />
      <ShoppingCart />
    </MainContent>
  </Page>
);

export default HomePage;
