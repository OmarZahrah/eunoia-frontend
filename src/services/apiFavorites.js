import customFetch from "../utils/customFetch";

export const addToFavorites = async (id) => {
  // console.log(id);
  const { data } = await customFetch.post("/wishlist", { serviceId: id });
  console.log(data);
};

export const getFavorites = async () => {
  try {
    const { data } = await customFetch.get("/wishlist");
    return data.data;
  } catch (error) {
    return [];
  }
};

export const deleteFromFavorites = async (id) => {
  await customFetch.delete(`wishlist/${id}`);
};
