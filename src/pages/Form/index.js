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

const Form = () => {
  const query = useQuery();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [currentEvent, setCurrentEvent] = useState();
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

  const initialValues = {
    name: "",
    description: "",
    company: "",
    color: ""
  };

  const handleSubmit = (data) => {
    if (currentEvent) {
      return editEvent();
    }
    createNewEvent(data);
  };

  const editEvent = () => {};

  const createNewEvent = async (data) => {
    try {
      setIsLoading(true);
      await axios.post("/", data);
      setIsLoading(false);
      navigate("/");
    } catch (e) {}
  };

  useEffect(() => {
    const eventID = query.get("id");
    if (eventID) {
      setCurrentEvent(eventID);
      setHeaderText("Edit Event");
    }
  }, []);

  return (
    <>
      <Header>{headerText}</Header>
      <AppForm
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        initialValues={initialValues}
      >
        <FormField name="name" placeholder="Name" />
        <FormField name="description" placeholder="Description" />
        <FormField name="company" placeholder="Company" />
        <FormField name="color" placeholder="Color" />
        <SubmitButton title="Submit" />
      </AppForm>
    </>
  );
};

export default Form;
