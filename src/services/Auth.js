import customFetch from "../utils/customFetch";

export const signup = async (formData) => {
  const { data } = await customFetch.post("/users/signup", formData);

  // return formData;
  return data;
};

export const login = async (formData) => {
  const { data } = await customFetch.post("/users/login", formData);
  return data.data.user;
};
