import customFetch from "../utils/customFetch";

export const addService = async (formData) => {
  const Data = Object.fromEntries(formData);
  const { data } = await customFetch.post("/Services", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

export const getCurrentService = async () => {
  const { data } = await customFetch.get("Services/myServiceProfile");
  return data;
};
