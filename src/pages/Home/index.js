import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import EventCard from "../../components/EventCard";
import Loader from "../../components/Loader";
import axios from "../../constants/axios";
import { Text, ErrorText } from "./styles";

const Home = () => {
  const [currentEvents, setCurrentEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const getEvents = async () => {
    try {
      setIsLoading(true);
      const resp = await axios.get("/");
      setIsLoading(false);
      setCurrentEvents(resp.data);
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
        <>
          <Text>There was an error loading your events</Text>
          <ErrorText>{error}</ErrorText>
        </>
      );
    }

    if (currentEvents.length === 0) {
      return <Text>You have no current events</Text>;
    }

    return currentEvents.map((item) => {
      return (
        <EventCard data={item} key={item.id} handleDelete={handleDelete} />
      );
    });
  };

  const handleDelete = async (eventID) => {
    try {
      setIsLoading(true);
      await axios.delete(`/${eventID}`);
      getEvents();
    } catch (e) {
      setIsLoading(false);
      setError(e.message);
    }
  };

  return (
    <div>
      <Header visible>Events</Header>
      {isLoading ? <Loader size={50} /> : getAllEvents()}
    </div>
  );
};

export default Home;
