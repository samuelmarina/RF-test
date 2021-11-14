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
import swal from "sweetalert";

const EventCard = ({ data, handleDelete }) => {
  const { name, description, company, id } = data;

  const willDelete = async () => {
    const value = await swal({
      text: "Are you sure you want to delete this event?",
      buttons: {
        cancel: {
          text: "Cancel",
          value: null,
          visible: true
        },
        confirm: {
          value: true,
          visible: true
        }
      }
    });

    if (value) {
      handleDelete(id);
    }
  };
  return (
    <Container>
      <Title>{name}</Title>
      <Content>{description}</Content>
      <Footer>{company}</Footer>
      <ButtonContainer>
        <Button>
          <EditIcon />
        </Button>
        <Button onClick={willDelete}>
          <DeleteIcon />
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default EventCard;
