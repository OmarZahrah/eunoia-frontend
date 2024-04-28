import customFetch from "../utils/customFetch";

export const addRequest = async (data) => {
  console.log("data", data);
  await customFetch.post(`requests/${data.packageId}`, data.data);
};

export const getRequests = async () => {
  const { data } = await customFetch.get(`requests/serviceProvider`);
  console.log(data);
  return data;
};
