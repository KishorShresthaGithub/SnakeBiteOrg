import axios from "axios";

import { server_url, validation } from "./config";

export const getSummaryReports = async ({ signal }) => {
  return await axios
    .get(`${server_url}/api/summaryreport/all`, {
      cancelToken: signal.token,
    })
    .catch(console.log);
};

export const getSummaryReport = async ({ signal }) => {
  return await axios
    .get(`${server_url}/api/summaryreport`, {
      cancelToken: signal.token,
    })
    .catch(console.log);
};

export const getSummaryReportID = async ({ summaryreport_id, signal }) => {
  return await axios
    .get(`${server_url}/api/summaryreport/${summaryreport_id}`, {
      cancelToken: signal.token,
    })
    .catch(console.log);
};

//upload image
export const saveSummaryReport = async (
  { data, signal, accesstoken },
  addToast
) => {
  return await axios
    .post(`${server_url}/api/summaryreport`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accesstoken}`,
      },
      cancelToken: signal.token,
    })
    .catch((err) => validation(err, addToast));
};

//upload image
export const updateSummaryReport = async (
  { data, summaryreport_id, signal, accesstoken },
  addToast
) => {
  return await axios
    .put(`${server_url}/api/summaryreport/${summaryreport_id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accesstoken}`,
      },
      cancelToken: signal.token,
    })
    .catch((err) => validation(err, addToast));
};

export const deleteSummaryReport = async (
  { summaryreport_id, signal, accesstoken },
  addToast
) => {
  return await axios
    .delete(`${server_url}/api/summaryreport/${summaryreport_id}`, {
      headers: {
        Authorization: `Bearer ${accesstoken}`,
      },
      cancelToken: signal.token,
    })
    .catch((err) => validation(err, addToast));
};
