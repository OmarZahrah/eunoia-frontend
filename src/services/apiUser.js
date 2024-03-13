import customFetch from "../utils/customFetch";

export const editUser = async (formData) => {
  const { data } = await customFetch.patch("/users/me", formData);
  // console.log(Object.fromEntries(formData));
  return data;
};
