import swal from "sweetalert";

const Alert = ({ title, text, icon }) => {
  return swal({
    title,
    text,
    icon,
    buttons: false,
    timer: 3000
  });
};

export default Alert;
