import customFetch from "../utils/customFetch";

export const addRequest = async (data) => {
  await customFetch.post(`requests/${data.packageId}`, data.data);
};

export const getUserRequests = async () => {
  const { data } = await customFetch.get("requests/user");
  return data.data;
};

export const getProviderRequests = async () => {
  try {
    const { data } = await customFetch.get("requests/serviceProvider");
    return data.data;
  } catch (error) {
    return [];
  }
};

export const handleRequest = async (data) => {
  console.log(data.decision);
  await customFetch.patch(`requests/${data.id}/${data.decision}`);
};
