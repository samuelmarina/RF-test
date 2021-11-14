import React from "react";
import { Container, Title } from "./styles";

function Header({ children }) {
  return (
    <Container>
      <Title>{children}</Title>
    </Container>
  );
}

export default Header;
