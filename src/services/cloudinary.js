import customFetch from "../utils/customFetch";

export const photoLink = async (file) => {
  const data = await customFetch.post("packages/uploadImage", file);
  return data.data;
  //   return link;
};
