import jwt_decode from "jwt-decode";

export const setToken = (token) => {
  localStorage.setItem("userToken", token);
};

export const getToken = () => {
  return localStorage.getItem("userToken");
};

export const removeToken = () => {
  localStorage.removeItem("userToken");
};

export const isTokenValid = () => {
  const token = getToken();
  if (!token) return false;

  try {
    const decoded = jwt_decode(token);
    const currentTime = Math.floor(Date.now() / 1000);
    return decoded.exp && decoded.exp > currentTime;
  } catch (error) {
    return false;
  }
};
