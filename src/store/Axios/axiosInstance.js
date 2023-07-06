import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:4001",
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosBaseQuery =
  (baseUrl) =>
  // { baseUrl } = { baseUrl: "" }
  async ({ url, method, body, params, headers }) => {
    const prepareHeaders = baseUrl.prepareHeaders({ ...headers })
    const URL = baseUrl.baseUrl+url;
    console.log(prepareHeaders, url, method, body, params, headers);

    try {
      return await axios({ url: URL, method, data: body, params ,headers:prepareHeaders});
    } catch (error) {
      return error;
    }
  };
