import React from "react";
import Add from "@material-ui/icons/Add";
import { Container, Title, Button } from "./styles";
import { useNavigate } from "react-router-dom";

function Header({ visible = false, children }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/form");
  };

  return (
    <Container>
      <Title>{children}</Title>
      {visible && (
        <Button onClick={handleClick}>
          <Add />
        </Button>
      )}
    </Container>
  );
}

export default Header;
