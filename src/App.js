import React from "react";
import GlobalStyle from "./assets/global/GlobalStyle";
import ResetCSS from "./assets/global/ResetCSS";
import HomePage from "./pages/HomePage";

const App = () => (
  <>
    <ResetCSS />
    <GlobalStyle />
    <HomePage />
  </>
);

export default App;
