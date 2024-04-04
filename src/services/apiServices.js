import customFetch from "../utils/customFetch";

export const addService = async (formData) => {
  const { data } = await customFetch.post("/Services", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  console.log("service", Object.fromEntries(formData));
  return data;
};

export const getAllServices = async () => {
  const { data } = await customFetch.get("/services");
  return data.data;
};

export const getCurrentService = async (id) => {
  // const { data } = await customFetch.get(`services/${id}/serviceProfile`);
  const { data } = await customFetch.get(`services/${id}`);
  console.log(data);
  return data.data;
};

export const editService = async (formData) => {
  const { data } = await customFetch.patch(`services/serviceProfile`, formData);
  // console.log(Object.fromEntries(formData));
  return data.data;
};

export const addPhotos = async (formData) => {
  console.log(Object.fromEntries(formData));
  const { data } = await customFetch.patch("services/add-Photos", formData);
  console.log(data);
  return data;
};

export const deletePhotos = async (formData) => {
  console.log("data", formData);
  console.log(JSON.stringify(formData));

  const request = {
    imageLinks: JSON.stringify(formData),
  };
  console.log("request", request);

  const data = await customFetch.delete("services/remove-Photos", request);
  return data;
};
