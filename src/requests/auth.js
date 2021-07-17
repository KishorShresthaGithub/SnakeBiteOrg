import axios from "axios";
import { server_url, validation } from "./config";

export const login = async (data, addToast) => {
  return await axios
    .post(`${server_url}/api/login`, data)
    .catch((err) => validation(err, addToast));
};

export const register = async (data, addToast) => {
  return await axios
    .post(`${server_url}/api/register`, data)
    .catch((err) => validation(err, addToast));
};

export const allUsers = async ({ accessToken }, addToast) => {
  return await axios
    .get(`${server_url}/api/users`, {
      header: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .catch((err) => validation(err, addToast));
};

export const updateUser = async (
  { data, string_id, accessToken },
  addToast
) => {
  return await axios
    .put(`${server_url}/api/users/${string_id}`, data)
    .catch((err) => validation(err, addToast));
};

export const changeRole = async (
  { data, string_id, accesstoken },
  addToast
) => {
  return await axios

    .put(`${server_url}/api/users/${string_id}/change_role`, data, {
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
    })
    .catch((err) => validation(err, addToast));
};

export const deleteUser = async ({ string_id, accesstoken }, addToast) => {
  return await axios
    .delete(`${server_url}/api/users/${string_id}`, {
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
    })
    .catch((err) => validation(err, addToast));
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
        return;
      }
    });

  return result;
};
