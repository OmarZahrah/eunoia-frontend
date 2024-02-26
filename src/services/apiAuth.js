import customFetch from "../utils/customFetch";

export const signup = async (formData) => {
  const { data } = await customFetch.post("/auth/register", formData);

  return data;
};

export const login = async (formData) => {
  const { data } = await customFetch.post("/auth/login", formData);

  return data;
};

export const getCurrentUser = async () => {
  const { data } = await customFetch.get("users/me");
  return data;
};
