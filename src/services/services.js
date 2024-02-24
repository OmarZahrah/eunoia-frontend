import customFetch from "../utils/customFetch";

export const getCurrentUser = async () => {
  const { data } = await customFetch.get("users/me");
  return data.data.user;
};

export const addService = async (formData) => {
  const response = await customFetch.post("/Services", formData, {
    // const { data } = await customFetch.post("/Services", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  // return data;
  return response;
  // const Data = Object.fromEntries(formData);
  // return Data;
};
