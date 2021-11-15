import React, { useEffect, useState } from "react";
import axios from "../../constants/axios";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../../hooks/useQuery";
import * as Yup from "yup";
import Alert from "../../components/Alert";
import AppForm from "../../components/Form";
import CancelButton from "../../components/Form/CancelButton";
import FormField from "../../components/Form/FormField";
import DateField from "../../components/Form/DateField";
import Header from "../../components/Header";
import SubmitButton from "../../components/Form/SubmitButton";
import Loader from "../../components/Loader";
import { Text, ErrorText, Container, ButtonsContainer } from "./styles";
import text from "../../constants/text";
import icon from "../../constants/icons";

const Form = () => {
  const query = useQuery();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [eventID, setEventID] = useState(query.get("id"));
  const [currentEvent, setCurrentEvent] = useState({
    name: "",
    description: "",
    company: "",
    color: "",
    email: "",
    address: "",
    phone: "",
    date: ""
  });
  const [headerText, setHeaderText] = useState(text.newEvent);

  const {
    name,
    description,
    company,
    color,
    email,
    address,
    phone,
    date,
    isRequired,
    mustValid,
    errorLoading
  } = text.form;
  const { wohooTitle, ohNoTitle, editSuccess, createSuccess } = text.modal;

  const validationSchema = Yup.object().shape({
    name: Yup.string(mustValid(name)).required(isRequired(name)).label(name),
    description: Yup.string(mustValid(description))
      .required(isRequired(description))
      .label(description),
    company: Yup.string(mustValid(company))
      .required(isRequired(company))
      .label(company),
    color: Yup.string(mustValid(color))
      .required(isRequired(color))
      .label(color),
    email: Yup.string(mustValid(email)).label(email),
    address: Yup.string(mustValid(address)).label(address),
    phone: Yup.string(mustValid(phone)).label(phone),
    date: Yup.string(mustValid(date)).label(date)
  });

  const handleSubmit = (data) => {
    if (eventID) {
      return editEvent();
    }
    createNewEvent(data);
  };

  const showError = (msg) => {
    return Alert({
      title: ohNoTitle,
      text: `${msg}`,
      icon: icon.error
    });
  };

  const showSuccess = (msg) => {
    return Alert({
      title: wohooTitle,
      text: `${msg}`,
      icon: icon.success
    });
  };

  const editEvent = async () => {
    try {
      setIsLoading(true);
      await axios.put(`/${eventID}`, currentEvent);
      await showSuccess(editSuccess);
      setIsLoading(false);
      navigate("/");
    } catch (e) {
      setIsLoading(false);
      showError(e.message);
    }
  };

  const createNewEvent = async (data) => {
    try {
      setIsLoading(true);
      await axios.post("/", data);
      await showSuccess(createSuccess);
      setIsLoading(false);
      navigate("/");
    } catch (e) {
      setIsLoading(false);
      showError(e.message);
    }
  };

  const getEvent = async (id) => {
    try {
      setIsLoading(true);
      const resp = await axios.get(`/${id}`);
      setCurrentEvent(resp.data);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      setError(e.message);
    }
  };

  useEffect(() => {
    if (eventID) {
      setEventID(eventID);
      getEvent(eventID);
      setHeaderText(text.editEvent);
    }
  }, [eventID]);

  return (
    <>
      <Header>{headerText}</Header>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <>
          <Text>{errorLoading}</Text>
          <ErrorText>{error}</ErrorText>
        </>
      ) : (
        <Container>
          <AppForm
            initialValues={currentEvent}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <FormField
              name="name"
              placeholder={name}
              defaultValue={currentEvent.name}
            />
            <FormField
              name="description"
              placeholder={description}
              defaultValue={currentEvent.description}
            />
            <FormField
              name="company"
              placeholder={company}
              initialValue={currentEvent.company}
              defaultValue={currentEvent.company}
            />
            <FormField
              name="email"
              placeholder={email}
              defaultValue={currentEvent.email}
            />
            <FormField
              name="address"
              placeholder={address}
              defaultValue={currentEvent.address}
            />
            <FormField
              name="phone"
              placeholder={phone}
              defaultValue={currentEvent.phone}
            />
            <FormField
              name="color"
              placeholder={color}
              defaultValue={currentEvent.color}
            />
            <DateField
              name="date"
              placeholder={date}
              defaultValue={currentEvent.date}
            />
            <ButtonsContainer>
              <CancelButton title="Cancel" />
              <SubmitButton title="Submit" />
            </ButtonsContainer>
          </AppForm>
        </Container>
      )}
    </>
  );
};

export default Form;
