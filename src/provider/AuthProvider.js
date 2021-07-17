/* import axios from "axios";
import { host } from "../../../settings"; */
import { useState } from "react";

export function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem("access_token");
    const userToken = JSON.parse(tokenString);

    return userToken?.access_token;
  };
  const [access_token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    localStorage.setItem("access_token", JSON.stringify(userToken));
    setToken(userToken.access_token);
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
