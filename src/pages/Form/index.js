import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import AppForm from "../../components/Form";
import FormField from "../../components/Form/FormField";
import SubmitButton from "../../components/Form/SubmitButton";
import Loader from "../../components/Loader";
import * as Yup from "yup";
import axios from "../../constants/axios";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../../hooks/useQuery";
import { Text, ErrorText } from "./styles";

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
    color: ""
  });
  const [headerText, setHeaderText] = useState("New Event");

  const validationSchema = Yup.object().shape({
    name: Yup.string("Name must be valid")
      .required("Name is required")
      .label("Name"),
    description: Yup.string("Description must be valid")
      .required("Description is required")
      .label("Description"),
    company: Yup.string("Company must be valid")
      .required("Company is required")
      .label("Company"),
    color: Yup.string("Color must be valid")
      .required("Color is required")
      .label("Color")
  });

  const handleSubmit = (data) => {
    if (eventID) {
      return editEvent();
    }
    createNewEvent(data);
  };

  const editEvent = async (data) => {
    try {
      setIsLoading(true);
      await axios.put(`/${eventID}`, currentEvent);
      setIsLoading(false);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  const createNewEvent = async (data) => {
    try {
      setIsLoading(true);
      await axios.post("/", data);
      setIsLoading(false);
      navigate("/");
    } catch (e) {
      console.log(e);
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
      setHeaderText("Edit Event");
    }
  }, [eventID]);

  return (
    <>
      <Header>{headerText}</Header>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <>
          <Text>There was an error loading your event</Text>
          <ErrorText>{error}</ErrorText>
        </>
      ) : (
        <AppForm
          initialValues={currentEvent}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <FormField
            name="name"
            placeholder="Name"
            defaultValue={currentEvent.name}
          />
          <FormField
            name="description"
            placeholder="Description"
            defaultValue={currentEvent.description}
          />
          <FormField
            name="company"
            placeholder="Company"
            initialValue={currentEvent.company}
            defaultValue={currentEvent.company}
          />
          <FormField
            name="color"
            placeholder="Color"
            defaultValue={currentEvent.color}
          />
          <SubmitButton title="Submit" />
        </AppForm>
      )}
    </>
  );
};

export default Form;
