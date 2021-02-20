import React from "react";
import { Card, ImageBox, InfoBox, Button } from "./styles";

export default function ProductCard() {
  return (
    <Card>
      <ImageBox />
      <InfoBox>
        <h2>Product Name</h2>
        <p>$ 123,00 - 2 left</p>
      </InfoBox>
      <Button>BUY</Button>
    </Card>
  );
}
