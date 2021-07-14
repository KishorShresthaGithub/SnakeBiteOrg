import axios from "axios";

import { server_url, validation } from "./config";

export const getEvents = async ({ signal }) => {
  return await axios
    .get(`${server_url}/api/events`, {
      cancelToken: signal.token,
    })
    .catch(console.log);
};

export const getEvent = async ({ event_slug, signal }) => {
  return await axios
    .get(`${server_url}/api/events/${event_slug}`, {
      cancelToken: signal.token,
    })
    .catch(console.log);
};

//upload image
export const saveEvent = async ({ data, signal, accesstoken }, addToast) => {
  return await axios
    .post(`${server_url}/api/events`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accesstoken}`,
      },
      cancelToken: signal.token,
    })
    .catch((err) => validation(err, addToast));
};

//upload image
export const updateEvent = async (
  { data, event_id, signal, accesstoken },
  addToast
) => {
  return await axios
    .put(`${server_url}/api/events/${event_id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accesstoken}`,
      },
      cancelToken: signal.token,
    })
    .catch((err) => validation(err, addToast));
};

export const deleteEvent = async (
  { event_id, signal, accesstoken },
  addToast
) => {
  return await axios
    .delete(`${server_url}/api/events/${event_id}`, {
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
      cancelToken: signal.token,
    })
    .catch((err) => validation(err, addToast));
};
