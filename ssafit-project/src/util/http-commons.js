import axios from "axios";

//spring boot 1004
export default axios.create({
  baseURL: "http://localhost:1004/",
  headers: {
    "Content-type": "application/json",
  },
});
