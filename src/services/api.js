import axios from "axios";

const api = axios.create({
  baseURL: "https://ermesontchum.herokuapp.com/",

});

export default api;

