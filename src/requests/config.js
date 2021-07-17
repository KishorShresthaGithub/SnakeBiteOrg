import { validationMessages } from "../provider/Toasts";

export const server_url = "http://localhost:3000";

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
