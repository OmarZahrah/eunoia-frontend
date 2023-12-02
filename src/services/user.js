import customFetch from "../utils/customFetch";

export const getCurrentUser = async () => {
  const { data } = await customFetch.get("users/me");
  return data;
};
