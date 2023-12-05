import customFetch from "../utils/customFetch";

export const getCurrentUser = async () => {
  const { data } = await customFetch.get("users/me");
  return data;
};

export const updateCurrentUser = async (formData) => {
  const { data } = await customFetch.patch("users/updateme", formData);

  return data;
  // return formData;
};
