import axios from "axios";
import { useToken } from "../provider/AuthProvider";
import { validationMessages } from "../provider/Toasts";
import { server_url } from "./config";

export const login = async (data, addToast) => {
  const result = await axios
    .post(`${server_url}/api/login`, data)
    .catch((err) => {
      const errData = err.response?.data;

      if (errData) validationMessages(errData, addToast);
    });

  return result;
};

export const validateToken = async ({ accessToken, signal }) => {
  const result = await axios
    .get(`${server_url}/api/users/current`, {
      cancelToken: signal.token,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .catch((err) => {
      if (!axios.isCancel(err)) {
        console.error(err);
        useToken().deleteToken();
        return;
      }
    });

  return result;
};
