import React from "react";
import Button from "../../../../../../components/Button";
import { Input, Container, ButtonBox } from "./styles";

export default function DiscountSection() {
  return (
    <Container>
      <Input placeholder="Discount code" />
      <ButtonBox>
        <Button text="APPLY" />
      </ButtonBox>
    </Container>
  );
}
