import customFetch from "../utils/customFetch";

export const signup = async (formData) => {
  const { data } = await customFetch.post("/users/signup", formData);

  return data;
};
