import axios from "axios";

import { server_url, validation } from "./config";

export const getNews = async ({ signal }) => {
  return await axios
    .get(`${server_url}/api/news`, {
      cancelToken: signal.token,
    })
    .catch(console.log);
};

export const getNew = async ({ news_id, signal, accesstoken }) => {
  return await axios
    .get(`${server_url}/api/news/${news_id}`, {
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
      cancelToken: signal.token,
    })
    .catch(console.log);
};

//upload image
export const saveNew = async ({ data, signal, accesstoken }, addToast) => {
  return await axios
    .post(`${server_url}/api/news`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accesstoken}`,
      },
      cancelToken: signal.token,
    })
    .catch((err) => validation(err, addToast));
};

//upload image
export const updateNew = async (
  { data, news_id, signal, accesstoken },
  addToast
) => {
  return await axios
    .put(`${server_url}/api/news/${news_id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accesstoken}`,
      },
      cancelToken: signal.token,
    })
    .catch((err) => validation(err, addToast));
};

export const deleteNew = async ({ news_id, signal, accesstoken }, addToast) => {
  return await axios
    .delete(`${server_url}/api/news/${news_id}`, {
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
      cancelToken: signal.token,
    })
    .catch((err) => validation(err, addToast));
};
