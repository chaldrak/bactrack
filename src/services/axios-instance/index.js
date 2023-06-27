import axios from "axios";

const baseURL = {
  2022: "https://api.eresultats.bj/api/candidates/search/50/session/",
  2021: "https://api.eresultats.bj/api/candidates/search/31/session/",
};

const createAxiosInstance = (session) => {
  if (!baseURL[session]) return null;
  const instance = axios.create({
    baseURL: baseURL[session],
    headers: {
      "Content-Type": "application/json",
    },
  });
  return instance;
};

export default createAxiosInstance;
