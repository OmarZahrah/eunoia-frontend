import customFetch from "../utils/customFetch";

export const addService = async (formData) => {
  const { data } = await customFetch.post("/Services", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

export const getCurrentService = async (id) => {
  const { data } = await customFetch.get(`services/${id}/serviceProfile`);

  return data.data[0];
};
