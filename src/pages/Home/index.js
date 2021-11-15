import React, { useEffect, useState } from "react";
import axios from "../../constants/axios";
import { propComparator } from "../../helpers/comparator";
import text from "../../constants/text";
import icon from "../../constants/icons";
import Alert from "../../components/Alert";
import EventCard from "../../components/EventCard";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import { Text, ErrorText, Container, InnerContainer } from "./styles";

const Home = () => {
  const [currentEvents, setCurrentEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const { successTitle, errorTitle, deleteSuccess } = text.modal;

  const getEvents = async () => {
    try {
      setIsLoading(true);
      const resp = await axios.get("/");
      setIsLoading(false);
      setCurrentEvents(resp.data.sort(propComparator("company")));
    } catch (e) {
      setIsLoading(false);
      setError(e.message);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  const getAllEvents = () => {
    if (error) {
      return (
        <InnerContainer>
          <Text>{text.loadingEventError}</Text>
          <ErrorText>{error}</ErrorText>
        </InnerContainer>
      );
    }

    if (currentEvents.length === 0) {
      return <Text>{text.emptyEvents}</Text>;
    }

    return (
      <Container>
        {currentEvents.map((item) => (
          <EventCard data={item} key={item.id} handleDelete={handleDelete} />
        ))}
      </Container>
    );
  };

  const handleDelete = async (eventID) => {
    try {
      setIsLoading(true);
      await axios.delete(`/${eventID}`);
      Alert({
        title: successTitle,
        text: deleteSuccess,
        icon: icon.success
      });
      getEvents();
    } catch (e) {
      setIsLoading(false);
      Alert({
        title: errorTitle,
        text: `${e.message}`,
        icon: icon.error
      });
    }
  };

  return (
    <div>
      <Header visible>{text.events}</Header>
      {isLoading ? <Loader size={50} /> : getAllEvents()}
    </div>
  );
};

export default Home;
