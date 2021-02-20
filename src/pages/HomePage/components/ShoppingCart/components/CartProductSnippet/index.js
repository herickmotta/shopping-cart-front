import React from "react";
import { Box, ImageBox, InfoBox, AddOrRemoveItem } from "./styles";

export default function CartProductSnippet() {
  return (
    <Box>
      <ImageBox />
      <InfoBox>
        <h2>Product Name</h2>
        <div>
          <p>Quantity: 4</p>
          <p>$ 123,45</p>
        </div>
      </InfoBox>
      <AddOrRemoveItem>
        <button type="button">+</button>
        <button type="button">-</button>
      </AddOrRemoveItem>
    </Box>
  );
}
