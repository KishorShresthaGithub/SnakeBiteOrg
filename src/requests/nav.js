import axios from "axios";

import { server_url, validation } from "./config";

export const getNavLinks = async ({ signal }) => {
  return await axios
    .get(`${server_url}/api/links`, {
      cancelToken: signal.token,
    })
    .catch(console.log);
};

export const getNavLinksAll = async ({ signal }) => {
  return await axios
    .get(`${server_url}/api/links/all`, {
      cancelToken: signal.token,
    })
    .catch(console.log);
};

export const getNavLink = async ({ nav_id, signal }) => {
  return await axios
    .get(`${server_url}/api/links/${nav_id}`, {
      cancelToken: signal.token,
    })
    .catch(console.log);
};

export const saveNav = async ({ data, accesstoken }, addToast) => {
  return await axios
    .post(`${server_url}/api/links`, data, {
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
    })
    .catch((err) => validation(err, addToast));
};

export const updateNav = async ({ data, nav_id, accesstoken }, addToast) => {
  return await axios
    .put(`${server_url}/api/links/${nav_id}`, data, {
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
    })
    .catch((err) => validation(err, addToast));
};

export const deleteNav = async ({ nav_id, accesstoken }, addToast) => {
  return await axios
    .delete(`${server_url}/api/links/${nav_id}`, {
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
    })
    .catch((err) => validation(err, addToast));
};
