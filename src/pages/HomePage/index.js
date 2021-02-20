import React from "react";
import Header from "./components/Header";
import ProductsSection from "./components/ProductsSection";
import { Page, MainContent } from "./styles";

const HomePage = () => (
  <Page>
    <Header />
    <MainContent>
      <ProductsSection />
    </MainContent>
  </Page>
);

export default HomePage;
