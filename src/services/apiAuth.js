import customFetch from "../utils/customFetch";

export const signup = async (formData) => {
  const { data } = await customFetch.post("/auth/register", formData);

  return data;
};

export const login = async (formData) => {
  const { data } = await customFetch.post("/auth/login", formData);

  return data;
};

export const getCurrentUser = async () => {
  try {
    const { data } = await customFetch.get("users/me");

    console.log(data);
    return data.user;
  } catch (error) {
    const unauthorized = error.response.status === 401;
    if (unauthorized) return null;
  }
  // console.log(status);
  // console.log(error);
  // return data.user;
};

export const logout = async () => {
  await customFetch.post("auth/logout");
};
