import axios from "axios";

const customFetch = axios.create({
  baseURL: "/api/v1",
  // baseURL: "https://eunoia.cyclic.app/api/v1",
});

export default customFetch;
