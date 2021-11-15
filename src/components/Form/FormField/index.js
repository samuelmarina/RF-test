import React from "react";
import { useFormikContext } from "formik";
import Input from "../../Input";
import ErrorMessage from "../../ErrorMessage";
import { Container } from "./styles";

const FormField = ({ placeholder, name, width, holder, ...otherProps }) => {
  const {
    values,
    setValues,
    setFieldTouched,
    handleChange,
    errors,
    touched
  } = useFormikContext();
  return (
    <Container>
      <Input
        onBlur={() => setFieldTouched(name)}
        onChange={(e) => {
          const temp = values;
          values[name] = e.target.value;
          setValues(temp);
          handleChange(name);
        }}
        placeHolder={placeholder}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </Container>
  );
};

export default FormField;
