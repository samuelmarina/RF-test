import React from "react";
import DatePicker from "react-datepicker";
import DateInput from "../../DateInput";
import "react-datepicker/dist/react-datepicker.css";
import { useFormikContext } from "formik";
import { Container } from "./styles";
import ErrorMessage from "../../ErrorMessage";

const DateField = ({ placeholder, name, width, holder, ...otherProps }) => {
  const {
    values,
    setValues,
    handleChange,
    errors,
    touched
  } = useFormikContext();

  const getDate = () => {
    if (!values[name] || values[name] === "") {
      return null;
    }
    return new Date(values[name]);
  };

  return (
    <Container>
      <DatePicker
        selected={getDate()}
        onChange={(date) => {
          const temp = values;
          values[name] = date;
          setValues(temp);
          handleChange(name);
        }}
        customInput={<DateInput placeHolder={placeholder} />}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </Container>
  );
};

export default DateField;
