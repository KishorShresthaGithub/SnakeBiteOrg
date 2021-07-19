import axios from "axios";

import { cancelToken, server_url, validation } from "./config";

export const getContacts = async ({ signal, accesstoken }) => {
  return await axios
    .get(`${server_url}/api/contacts`, {
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
      cancelToken: signal.token,
    })
    .catch(cancelToken);
};

export const getContact = async ({ contact_id, signal, accesstoken }) => {
  return await axios
    .get(`${server_url}/api/contacts/${contact_id}`, {
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
      cancelToken: signal.token,
    })
    .catch(cancelToken);
};

//upload image
export const saveContact = async ({ data, signal, accesstoken }, addToast) => {
  return await axios
    .post(`${server_url}/api/contacts`, data, {
      cancelToken: signal.token,
    })
    .catch((err) => validation(err, addToast));
};
