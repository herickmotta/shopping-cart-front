import React from "react";
import { Container, UserBox, Avatar, Content } from "./styles";

const Header = () => (
  <Container>
    <Content>
      <h1>Shopping</h1>
      <UserBox>
        <Avatar />
        <p>John Doe</p>
      </UserBox>
    </Content>
  </Container>
);

export default Header;
