import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-timestamp.herokuapp.com/",
  timeout: 5000,
});

export { api };
