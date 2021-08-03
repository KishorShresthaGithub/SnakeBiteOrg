import axios from "axios";

import { cancelToken, server_url, validation } from "./config";

export const getSummaryReports = async ({ signal, limit }) => {
  return await axios
    .get(
      `${server_url}/api/summaryreport/all${limit ? `?limit=${limit}` : ""}`,
      {
        cancelToken: signal.token,
      }
    )
    .catch(cancelToken);
};

export const getSummaryReport = async ({ signal }) => {
  return await axios
    .get(`${server_url}/api/summaryreport`, {
      cancelToken: signal.token,
    })
    .catch(cancelToken);
};

export const getSummaryReportID = async ({ summaryreport_id, signal }) => {
  return await axios
    .get(`${server_url}/api/summaryreport/${summaryreport_id}`, {
      cancelToken: signal.token,
    })
    .catch(cancelToken);
};

//upload image
export const saveSummaryReport = async ({ data, accesstoken }, addToast) => {
  return await axios
    .post(`${server_url}/api/summaryreport`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accesstoken}`,
      },
    })
    .catch((err) => validation(err, addToast));
};

//upload image
export const updateSummaryReport = async (
  { data, summaryreport_id, accesstoken },
  addToast
) => {
  return await axios
    .put(`${server_url}/api/summaryreport/${summaryreport_id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accesstoken}`,
      },
    })
    .catch((err) => validation(err, addToast));
};

export const deleteSummaryReport = async (
  { summaryreport_id, accesstoken },
  addToast
) => {
  return await axios
    .delete(`${server_url}/api/summaryreport/${summaryreport_id}`, {
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
    })
    .catch((err) => validation(err, addToast));
};
