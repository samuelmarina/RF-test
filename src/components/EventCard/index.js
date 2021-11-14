import React from "react";
import {
  Container,
  Title,
  Content,
  Footer,
  ButtonContainer,
  Button
} from "./stlyes";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const EventCard = ({ data }) => {
  const { name, description, company } = data;
  return (
    <Container>
      <Title>{name}</Title>
      <Content>{description}</Content>
      <Footer>{company}</Footer>
      <ButtonContainer>
        <Button>
          <EditIcon />
        </Button>
        <Button>
          <DeleteIcon />
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default EventCard;
