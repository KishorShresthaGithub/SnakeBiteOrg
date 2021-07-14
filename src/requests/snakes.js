import axios from "axios";

import { server_url, validation } from "./config";

export const getSnakes = async ({ signal }) => {
  return await axios
    .get(`${server_url}/api/snakes`, {
      cancelToken: signal.token,
    })
    .catch(console.log);
};

export const getSnake = async ({ snake_slug, signal }) => {
  return await axios
    .get(`${server_url}/api/snakes/${snake_slug}`, {
      cancelToken: signal.token,
    })
    .catch(console.log);
};

//upload image
export const saveSnake = async ({ data, signal, accesstoken }, addToast) => {
  return await axios
    .post(`${server_url}/api/snakes`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accesstoken}`,
      },
      cancelToken: signal.token,
    })
    .catch((err) => validation(err, addToast));
};

//upload image
export const updateSnake = async (
  { data, snake_id, signal, accesstoken },
  addToast
) => {
  return await axios
    .put(`${server_url}/api/snakes/${snake_id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accesstoken}`,
      },
      cancelToken: signal.token,
    })
    .catch((err) => validation(err, addToast));
};

export const deleteSnake = async (
  { snake_id, signal, accesstoken },
  addToast
) => {
  return await axios
    .delete(`${server_url}/api/snakes/${snake_id}`, {
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
      cancelToken: signal.token,
    })
    .catch((err) => validation(err, addToast));
};
