import React, { forwardRef } from "react";
import { Container, PlaceHolder, Input } from "./styles";

const DateInput = forwardRef(
  ({ placeHolder = "", value, ...otherProps }, ref) => (
    <Container ref={ref}>
      <PlaceHolder>{placeHolder}</PlaceHolder>
      <Input {...otherProps} value={value} />
    </Container>
  )
);

export default DateInput;
