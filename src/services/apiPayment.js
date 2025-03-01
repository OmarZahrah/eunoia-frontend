import customFetch from "../utils/customFetch";

export const payment = async (id) => {
  const { data } = await customFetch.get(
    `orders/checkout-session/paymob/${id}`
  );
  return data;
};
