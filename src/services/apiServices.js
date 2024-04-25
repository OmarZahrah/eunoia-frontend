import customFetch from "../utils/customFetch";

export const addService = async (formData) => {
  const { data } = await customFetch.post("/Services", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  // console.log("service", Object.fromEntries(formData));
  return data;
};

export const getAllServices = async (filters) => {
  const str = filters
    .map((filter) => `&${Object.keys(filter)}=${Object.values(filter)}`)
    .join("");

  // console.log("filters", filters);
  // const { data } =   await customFetch.get(`/services${str ? str : ""}`);
  const { data } = await customFetch.get(`/services?${str && str}`);
  return data.data;
};

export const getMyService = async () => {
  const { data } = await customFetch.get(`services/serviceProfile`);
  return data.data;
};

export const getCurrentService = async (id) => {
  // const { data } = await customFetch.get(`services/${id}/serviceProfile`);
  const { data } = await customFetch.get(`services/${id}`);
  return data.data;
};

export const editService = async (formData) => {
  // console.log(Object.fromEntries(formData));
  const { data } = await customFetch.patch(`services/serviceProfile`, formData);
  return data.data;
};

export const addPhotos = async (formData) => {
  console.log(Object.fromEntries(formData));
  const { data } = await customFetch.patch("services/add-Photos", formData);
  return data.data;
};

export const deletePhotos = async (image) => {
  console.log(image);

  const { data } = await customFetch.delete("services/remove-Photos", image);
  console.log(data.data);
};

export const nearbyServices = async () => {
  try {
    const { data } = await customFetch.get(`services/nearby`);
    return data.data;
  } catch (error) {
    return [];
  }
};
