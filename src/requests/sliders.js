import axios from "axios";

import { server_url, validation } from "./config";

export const getSliders = async ({ signal }) => {
  return await axios
    .get(`${server_url}/api/sliders`, {
      cancelToken: signal.token,
    })
    .catch(console.log);
};

export const getSlider = async ({ slider_slug, signal }) => {
  return await axios
    .get(`${server_url}/api/sliders/${slider_slug}`, {
      cancelToken: signal.token,
    })
    .catch(console.log);
};

//upload image
export const saveSlider = async ({ data, accesstoken }, addToast) => {
  return await axios
    .post(`${server_url}/api/sliders`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accesstoken}`,
      },
    })
    .catch((err) => validation(err, addToast));
};

//upload image
export const updateSlider = async (
  { data, slider_id, accesstoken },
  addToast
) => {
  return await axios
    .put(`${server_url}/api/sliders/${slider_id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accesstoken}`,
      },
    })
    .catch((err) => validation(err, addToast));
};

export const updatePosition = async (
  { position, slider_id, signal, accesstoken },
  addToast
) => {
  return await axios
    .put(
      `${server_url}/api/sliders/${slider_id}`,
      { position },
      {
        headers: {
          Authorization: `Bearer ${accesstoken}`,
        },
        cancelToken: signal.token,
      }
    )
    .catch((err) => validation(err, addToast));
};

export const deleteSlider = async ({ slider_id, accesstoken }, addToast) => {
  return await axios
    .delete(`${server_url}/api/sliders/${slider_id}`, {
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      }
    })
    .catch((err) => validation(err, addToast));
};
