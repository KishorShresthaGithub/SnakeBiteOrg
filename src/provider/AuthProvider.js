import { useState } from "react";

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem("access_token");
    const userToken = JSON.parse(tokenString);
    return userToken;
  };
  const [access_token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    localStorage.setItem("access_token", JSON.stringify(userToken));
    setToken(userToken.token);
  };
  const deleteToken = () => {
    localStorage.removeItem("access_token");
    setToken("");
  };

  return {
    setToken: saveToken,
    deleteToken: deleteToken,
    access_token,
  };
}
