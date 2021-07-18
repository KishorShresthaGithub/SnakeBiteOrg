import axios from "axios";

import { server_url, validation } from "./config";

export const getNews = async ({ signal }) => {
  return await axios
    .get(`${server_url}/api/news`, {
      cancelToken: signal.token,
    })
    .catch(console.log);
};

export const getNew = async ({ news_id, signal }) => {
  return await axios
    .get(`${server_url}/api/news/${news_id}`, {
      cancelToken: signal.token,
    })
    .catch(console.log);
};

//upload image
export const saveNews = async ({ data, accesstoken }, addToast) => {
  return await axios
    .post(`${server_url}/api/news`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accesstoken}`,
      },
    })
    .catch((err) => validation(err, addToast));
};

//upload image
export const updateNews = async ({ data, news_id, accesstoken }, addToast) => {
  return await axios
    .put(`${server_url}/api/news/${news_id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accesstoken}`,
      },
    })
    .catch((err) => validation(err, addToast));
};

export const deleteNews = async ({ news_id, accesstoken }, addToast) => {
  return await axios
    .delete(`${server_url}/api/news/${news_id}`, {
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
    })
    .catch((err) => validation(err, addToast));
};
