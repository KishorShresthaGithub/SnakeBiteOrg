import axios from "axios";

import { cancelToken, server_url, validation } from "./config";

export const getSnakes = async ({ signal,limit }) => {
  return await axios
    .get(`${server_url}/api/snakes${limit?"?limit="+limit:""}`, {
      cancelToken: signal.token,
    })
    .catch(cancelToken);
};

export const getSnake = async ({ snake_slug, signal }) => {
  return await axios
    .get(`${server_url}/api/snakes/${snake_slug}`, {
      cancelToken: signal.token,
    })
    .catch(cancelToken);
};

//upload image
export const saveSnake = async ({ data, accesstoken }, addToast) => {
  return await axios
    .post(`${server_url}/api/snakes`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accesstoken}`,
      },
    })
    .catch((err) => validation(err, addToast));
};

//upload image
export const updateSnake = async (
  { data, snake_id, accesstoken },
  addToast
) => {
  return await axios
    .put(`${server_url}/api/snakes/${snake_id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accesstoken}`,
      },
    })
    .catch((err) => validation(err, addToast));
};

export const deleteSnake = async ({ snake_id, accesstoken }, addToast) => {
  return await axios
    .delete(`${server_url}/api/snakes/${snake_id}`, {
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
    })
    .catch((err) => validation(err, addToast));
};
