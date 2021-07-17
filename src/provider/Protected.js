import axios from "axios";
import { useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { validateToken } from "../requests/auth";
import { useToken } from "./AuthProvider";

function Protected({ children }) {
  const { access_token } = useToken();
  const history = useHistory();

  if (!access_token) {
    history.push("/login");
  }

  const tokenValidation = useCallback(
    (signal) => {
      validateToken({ accessToken: access_token, signal }).catch((err) => {
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

  return <>{children}</>;
}

export default Protected;
