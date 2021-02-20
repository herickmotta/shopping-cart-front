import React from "react";
import Button from "../../../../../../components/Button";
import { Card, ImageBox, InfoBox } from "./styles";

export default function ProductCard() {
  return (
    <Card>
      <ImageBox />
      <InfoBox>
        <h2>Product Name</h2>
        <p>$ 123,00 - 2 left</p>
      </InfoBox>
      <Button width="100%" height="15%">
        BUY
      </Button>
    </Card>
  );
}
