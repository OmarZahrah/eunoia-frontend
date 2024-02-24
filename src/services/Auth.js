import customFetch from "../utils/customFetch";

export const signup = async (formData) => {
  // const response = await customFetch.post("/auth/register", formData);
  const { data } = await customFetch.post("/auth/register", formData);

  // return formData;
  // if (error) return error;
  // return data.data.user;
  return data;
  // return formData;
};

export const login = async (formData) => {
  // try {
  const { data } = await customFetch.post("/auth/login", formData);
  // return data.data.user;
  return data;
  // } catch (error) {
  //   return new Error(error?.response?.data?.message);
  // }
};
