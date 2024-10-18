import customFetch from "../utils/customFetch";

export const signup = async (formData) => {
  const { data } = await customFetch.post("/auth/register", formData);

  return data;
};

export const login = async (formData) => {
  const { data } = await customFetch.post("/auth/login", formData);
  // console.log(data);
  return data;
};

export const getCurrentUser = async () => {
  try {
    const { data } = await customFetch.get("users/me");
    return data.user;
  } catch (error) {
    return {};
  }
};

export const checkAuth = async () => {
  try {
    const { data } = await customFetch.get("auth/checkAuth");
    return { isAuthenticated: data.isAuthenticated };
  } catch (error) {
    return { isAuthenticated: error.response.data.isAuthenticated };
  }
};

export const logout = async () => {
  await customFetch.post("auth/logout");
};
