import React from "react";
import { useFormikContext } from "formik";
import { Container, Text } from "./styles";

const SubmitButton = ({ title }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <Container onClick={handleSubmit} type="submit">
      <Text>{title}</Text>
    </Container>
  );
};

export default SubmitButton;
