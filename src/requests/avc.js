//Anti venom centers

import axios from "axios";

import { cancelToken, server_url, validation } from "./config";

export const getAVCs = async ({ signal }) => {
  return await axios
    .get(`${server_url}/api/avcenters`, {
      cancelToken: signal.token,
    })
    .catch(cancelToken);
};

export const getAVC = async ({ avc_slug, signal }) => {
  return await axios
    .get(`${server_url}/api/avcenters/${avc_slug}`, {
      cancelToken: signal.token,
    })
    .catch(cancelToken);
};

export const getDistricts = async ({ signal }) => {
  return await axios
    .get(`${server_url}/api/avcenters/districts/`, {
      cancelToken: signal.token,
    })
    .catch(cancelToken);
};

export const getCentersFromDistrict = async ({ district, signal }) => {
  return await axios
    .get(`${server_url}/api/avcenters/districts/${district}`, {
      cancelToken: signal.token,
    })
    .catch(cancelToken);
};

//upload image
export const saveAVC = async ({ data, accesstoken }, addToast) => {
  return await axios
    .post(`${server_url}/api/avcenters`, data, {
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
    })
    .catch((err) => validation(err, addToast));
};

//upload image
export const updateAVC = async ({ data, avc_id, accesstoken }, addToast) => {
  return await axios
    .put(`${server_url}/api/avcenters/${avc_id}`, data, {
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
    })
    .catch((err) => validation(err, addToast));
};

export const deleteAVC = async ({ avc_id, signal, accesstoken }, addToast) => {
  return await axios
    .delete(`${server_url}/api/avcenters/${avc_id}`, {
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
    })
    .catch((err) => validation(err, addToast));
};
