import axios from "axios";
import React, { useCallback, useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";
import { validateToken } from "../requests/auth";
import useToken from "./AuthProvider";

const Protected = ({ children }) => {
  const { access_token, deleteToken } = useToken();

  const history = useHistory();

  if (!access_token) {
    history.push("/login");
  }

  const tokenValidation = useCallback(
    async (signal) => {
      await validateToken({
        accessToken: access_token,
        signal,
      }).catch((err) => {
        if (!axios.isCancel(err)) {
          deleteToken();
        }
      });
    },
    [access_token, deleteToken]
  );

  useLayoutEffect(() => {
    const signal = axios.CancelToken.source();

    tokenValidation(signal);

    return () => {
      signal.cancel();
    };
  }, [tokenValidation]);

  return <div>{children}</div>;
};

export default Protected;
