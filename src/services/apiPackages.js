// POST http://localhost:3000/api/v1/packages

import customFetch from "../utils/customFetch";

export const addPackage = async (formData) => {
  //   console.log(Object.fromEntries(formData));
  //   const data = Object.fromEntries(formData);
  // console.log("data", formData);
  const { data } = await customFetch.post("packages", formData);
  console.log("data", data.data);
  return data.data;
};

export const getPackage = async (id) => {
  const { data } = await customFetch.get(`packages/${id}`);
  console.log(data);
  return data.data;
};
