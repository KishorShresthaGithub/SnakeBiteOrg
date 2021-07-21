import axios from "axios";

import { cancelToken, server_url, validation } from "./config";

export const getGallery = async ({ signal }) => {
  return await axios
    .get(`${server_url}/api/gallery`, {
      cancelToken: signal.token,
    })
    .catch(cancelToken);
};

export const getSingleGallery = async ({ gallery_id, signal }) => {
  return await axios
    .get(`${server_url}/api/gallery/${gallery_id}`, {
      cancelToken: signal.token,
    })
    .catch(cancelToken);
};

//image upload
export const saveGallery = async ({ data, accesstoken }, addToast) => {
  return await axios
    .post(`${server_url}/api/gallery`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accesstoken}`,
      },
    })
    .catch((err) => validation(err, addToast));
};

//image upload
export const addToGallery = async (
  { data, gallery_id, accesstoken },
  addToast
) => {
  return await axios
    .post(`${server_url}/api/gallery/${gallery_id}/galleryImage`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accesstoken}`,
      },
    })
    .catch((err) => validation(err, addToast));
};

//image upload
export const updateGallery = async (
  { data, gallery_id, accesstoken },
  addToast
) => {
  return await axios
    .put(`${server_url}/api/gallery/${gallery_id}`, data, {
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
    })
    .catch((err) => validation(err, addToast));
};

//image upload
export const updateSingleGallery = async (
  { data, gallery_id, gallery_image_id, accesstoken },
  addToast
) => {
  return await axios
    .put(
      `${server_url}/api/gallery/${gallery_id}/galleryImage/${gallery_image_id}`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accesstoken}`,
        },
      }
    )
    .catch((err) => validation(err, addToast));
};

export const deleteGallery = async ({ gallery_id, accesstoken }, addToast) => {
  return await axios
    .delete(`${server_url}/api/gallery/${gallery_id}`, {
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
    })
    .catch((err) => validation(err, addToast));
};

export const deleteImage = async (
  { gallery_id, gallery_image_id, accesstoken },
  addToast
) => {
  return await axios
    .delete(
      `${server_url}/api/gallery/${gallery_id}/galleryImage/${gallery_image_id}`,
      {
        headers: {
          Authorization: `Bearer ${accesstoken}`,
        },
      }
    )
    .catch((err) => validation(err, addToast));
};
