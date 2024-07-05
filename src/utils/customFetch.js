import axios from "axios";

const customFetch = axios.create({
  baseURL: "/api/v1",
  // baseURL: "http://3.129.5.59:3000/api/v1/",
});

export default customFetch;
