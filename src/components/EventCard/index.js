import React from "react";
import { useNavigate } from "react-router-dom";
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
import icons from "../../constants/icons";
import text from "../../constants/text";

const EventCard = ({ data, handleDelete }) => {
  const { name, description, company, id } = data;
  const navigate = useNavigate();
  const { deletePrompt } = text.modal;

  const willDelete = async () => {
    const value = await swal({
      text: deletePrompt,
      buttons: {
        cancel: {
          text: text.cancel,
          value: null,
          visible: true
        },
        confirm: {
          value: true,
          visible: true
        }
      },
      icon: icons.warning
    });

    if (value) {
      handleDelete(id);
    }
  };

  const handleEdit = () => {
    navigate(`/form?id=${id}`);
  };

  return (
    <Container>
      <Title>{name}</Title>
      <Content>{description}</Content>
      <Footer>{company}</Footer>
      <ButtonContainer>
        <Button onClick={handleEdit}>
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
