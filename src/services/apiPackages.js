// POST http://localhost:3000/api/v1/packages

import customFetch from "../utils/customFetch";

export const addPackage = async (formData) => {
  const { data } = await customFetch.post("packages", formData);
  // console.log("data", data.data);
  return data.data;
};

export const getPackage = async (id) => {
  try {
    const { data } = await customFetch.get(`packages/${id}`);
    return data.data;
  } catch (error) {
    const unauthorized = error.response.status === 401;
    if (unauthorized) return null;
  }
};

export const editPackage = async (data) => {
  await customFetch.patch(`packages/updatePackage/${data.id}`, data.data);
};

export const addPhoto = async (formData) => {
  await customFetch.patch(`packages/${formData.id}`, formData.photo);
  // console.log("data", data.data);
  // return data.data;
};
export const deletePackage = async (id) => {
  await customFetch.delete(`packages/${id}`);
  // console.log("id", id);
};
