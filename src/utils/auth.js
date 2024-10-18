import Cookies from "js-cookie";

export const isAuthenticated = () => {
  const token = Cookies.get("eunoia-jwt");
  return !!token;
};
