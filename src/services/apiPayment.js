import customFetch from "../utils/customFetch";

export const payment = async (id) => {
  console.log(id);
  const { data } = await customFetch.get(
    `orders/checkout-session/paymob/${id}`
  );
  console.log(data);
  return data;
};
