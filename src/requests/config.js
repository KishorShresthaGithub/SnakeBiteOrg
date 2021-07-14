export const server_url = "http://localhost:3000";

export const convertFormData = (formData) => {
  let object = {};

  for (var pair of formData.entries()) {
    object[pair[0]] = pair[1];
  }
  return object;
};
