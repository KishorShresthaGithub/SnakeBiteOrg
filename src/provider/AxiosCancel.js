import axios from "axios";

export const cancelToken = (err) => {
  if (!axios.isCancel(err)) console.error(err);
};
