import React from "react";
import { Container, UserBox, Avatar } from "./styles";

const Header = () => (
  <Container>
    <h1>Shopping</h1>
    <UserBox>
      <Avatar />
      <p>John Doe</p>
    </UserBox>
  </Container>
);

export default Header;
