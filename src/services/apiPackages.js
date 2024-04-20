// POST http://localhost:3000/api/v1/packages

import customFetch from "../utils/customFetch";

export const addPackage = async (formData) => {
  const { data } = await customFetch.post("packages", formData);
  // console.log("data", data.data);
  return data.data;
};

export const getPackage = async (id) => {
  const { data } = await customFetch.get(`packages/${id}`);
  return data.data;
};

export const addPhoto = async (id, photo) => {
  const { data } = await customFetch.patch(`packages/${id}`, photo);
  // console.log("data", data.data);
  // return data.data;
};
