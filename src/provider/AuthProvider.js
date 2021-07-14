/* import axios from "axios";
import { host } from "../../../settings"; */
import axios from "axios";
import React, { Fragment, useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { validateToken } from "../requests/auth";

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

export function Protected({ children }) {
  const { access_token } = useToken();
  const history = useHistory();

  if (!access_token) {
    history.push("/login");
  }

  const tokenValidation = useCallback(
    (signal) => {
      validateToken({ access_token, signal }).catch((err) => {
        console.log(err);
      });
    },
    [access_token]
  );

  useEffect(() => {
    const signal = axios.CancelToken.source();
    tokenValidation(signal);
    return () => {
      signal.cancel();
    };
  }, [tokenValidation]);

  return <Fragment>{children}</Fragment>;
}
