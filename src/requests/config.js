import axios from "axios";
import { validationMessages } from "../provider/Toasts";

export const server_url = "https://api.trioplustechnology.com";

export const convertFormData = (formData) => {
  let object = {};

  for (var pair of formData.entries()) {
    if (pair[1]) object[pair[0]] = pair[1];
  }

  return object;
};

export const validation = (err, addToast) => {
  const errData = err.response?.data;
  if (errData) validationMessages(errData, addToast);
};

export const cancelToken = (err) => {
  if (!axios.isCancel(err)) console.error(err);
};
