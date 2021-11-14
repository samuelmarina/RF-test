import React from "react";
import { Container, PlaceHolder, Input } from "./styles";

const InputField = ({ placeHolder = "", ...otherProps }) => {
  return (
    <Container>
      <PlaceHolder>{placeHolder}</PlaceHolder>
      <Input {...otherProps} />
    </Container>
  );
};

export default InputField;
