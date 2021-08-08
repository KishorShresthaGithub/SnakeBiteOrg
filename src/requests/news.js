import axios from "axios";

import { cancelToken, server_url, validation } from "./config";

export const getNews = async ({ signal }) => {
  return await axios
    .get(`${server_url}/api/news`, {
      cancelToken: signal.token,
    })
    .catch(cancelToken);
};

export const getNew = async ({ news_slug, signal }) => {
  return await axios
    .get(`${server_url}/api/news/${news_slug}`, {
      cancelToken: signal.token,
    })
    .catch(cancelToken);
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
