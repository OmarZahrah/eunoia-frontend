import customFetch from "../utils/customFetch";

export const addService = async (formData) => {
  const { data } = await customFetch.post("/Services", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  // console.log(Object.fromEntries(formData));
  return data;
};

export const getCurrentService = async (id) => {
  const { data } = await customFetch.get(`services/${id}/serviceProfile`);
  // console.log(data.data);
  return data.data;
};

export const editService = async (formData) => {
  console.log("fromData", Object.fromEntries(formData));
  const { data } = await customFetch.patch(`services/serviceProfile`, formData);
  // console.log(Object.fromEntries(formData));
  // console.log(data.data);
  return data.data;
};
