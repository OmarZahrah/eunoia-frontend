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
  // console.log(str);
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
  return data.data.document;
};

export const editService = async (formData) => {
  // console.log(Object.fromEntries(formData));
  const { data } = await customFetch.patch(`services/serviceProfile`, formData);
  return data.data;
};

export const addPhotos = async (formData) => {
  // console.log(Object.fromEntries(formData));
  const { data } = await customFetch.patch("services/add-Photos", formData);
  return data.data;
};

export const deletePhotos = async (image) => {
  const imageLinks = { imageLinks: image };
  // console.log(imageLinks);
  const { data } = await customFetch.patch(
    "services/remove-Photos",
    imageLinks
  );
  // console.log(data.data);
};

export const nearbyServices = async () => {
  try {
    const { data } = await customFetch.get(`services/nearby`);
    return data.data;
  } catch (error) {
    return [];
  }
};
