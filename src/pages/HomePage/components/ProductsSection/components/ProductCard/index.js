import React from "react";
import Button from "../../../../../../components/Button";
import { Card, ImageBox, InfoBox } from "./styles";

export default function ProductCard({ name, price, available }) {
  return (
    <Card>
      <ImageBox />
      <InfoBox>
        <h2>{name}</h2>
        <p>{`$ ${price},00 · ${available} left`}</p>
      </InfoBox>
      <Button width="100%" height="15%" text="BUY" />
    </Card>
  );
}
