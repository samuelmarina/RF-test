import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Text } from "./styles";

const CancelButton = ({ title }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <Container onClick={handleClick}>
      <Text>{title}</Text>
    </Container>
  );
};

export default CancelButton;
