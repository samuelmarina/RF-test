import React from "react";
import { Text } from "./styles";

const ErrorMessage = ({ error, visible }) => {
  if (!visible || !error) return null;

  return <Text>{error}</Text>;
};

export default ErrorMessage;
