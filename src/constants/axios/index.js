import axios from "axios";

const instance = axios.create({
  baseURL: "https://rf-json-server.herokuapp.com/events",
  timeout: 20000,
  headers: {
    "Content-type": "application/json"
  }
});

export default instance;
