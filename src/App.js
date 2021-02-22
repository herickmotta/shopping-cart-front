import React from "react";
import GlobalStyle from "./assets/global/GlobalStyle";
import ResetCSS from "./assets/global/ResetCSS";
import { CartProvider } from "./contexts/CartContext";
import HomePage from "./pages/HomePage";

const App = () => (
  <CartProvider>
    <ResetCSS />
    <GlobalStyle />
    <HomePage />
  </CartProvider>
);

export default App;
