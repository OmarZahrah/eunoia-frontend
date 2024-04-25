import customFetch from "../utils/customFetch";

export const addReview = async (obj) => {
  console.log(obj);
  console.log(obj.data);
  await customFetch.post(`services/${obj.serviceId}/reviews`, obj.data);
};

export const deleteReview = async (id) => {
  await customFetch.delete(`reviews/${id}`);
};
