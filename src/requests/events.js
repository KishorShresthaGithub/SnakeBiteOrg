import axios from "axios";

import { cancelToken, server_url, validation } from "./config";

export const getEvents = async ({ signal }) => {
  return await axios
    .get(`${server_url}/api/events`, {
      cancelToken: signal.token,
    })
    .catch(cancelToken);
};

export const getUpcoming = async ({ signal }) => {
  return await axios
    .get(`${server_url}/api/events/upcoming`, {
      cancelToken: signal.token,
    })
    .catch(cancelToken);
};

export const getEvent = async ({ event_slug, signal }) => {
  return await axios
    .get(`${server_url}/api/events/${event_slug}`, {
      cancelToken: signal.token,
    })
    .catch(cancelToken);
};

//upload image
export const saveEvent = async ({ data, accesstoken }, addToast) => {
  return await axios
    .post(`${server_url}/api/events`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accesstoken}`,
      },
    })
    .catch((err) => validation(err, addToast));
};

//upload image
export const updateEvent = async (
  { data, event_id, accesstoken },
  addToast
) => {
  return await axios
    .put(`${server_url}/api/events/${event_id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accesstoken}`,
      },
    })
    .catch((err) => validation(err, addToast));
};

export const deleteEvent = async ({ event_id, accesstoken }, addToast) => {
  return await axios
    .delete(`${server_url}/api/events/${event_id}`, {
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
    })
    .catch((err) => validation(err, addToast));
};
