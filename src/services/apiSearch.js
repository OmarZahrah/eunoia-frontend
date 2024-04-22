import customFetch from "../utils/customFetch";

export const search = async (keyword) => {
  const { data } = await customFetch.get(`services?keyword=${keyword}`);
  return data.data;
};
