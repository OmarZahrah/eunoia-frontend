import customFetch from "../utils/customFetch";

export const addRequest = async (data) => {
  console.log("data", data);
  await customFetch.post(`requests/${data.packageId}`, data.data);
};

export const getRequests = async (role) => {
  console.log("role", role);
  const { data } = await customFetch.get(`requests/${role}`);
  return data.data;
};
