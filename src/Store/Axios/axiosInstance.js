import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:4001",
  headers: {
    "Content-Type": "application/json",
  },
  // validateStatus: function (status) {
  //   return status < 500; // Treat all 5xx status codes as errors
  // },
});

export const axiosBaseQuery =
  (config) =>
  // ({ config } = { config: "" }) =>
  async ({ url, method, body, params, headers }) => {
    // const prepareHeaders = config?.prepareHeaders({ ...headers })
    const URL = config.baseUrl+url;
    console.log( URL, method, body, params, headers);
      
    try {   
      let result = await axios({ url: URL, method, data: body, params ,headers});
      console.log(result)
      return { data: result.data }
    } catch (error) {
      console.log(error.response)
      return {
        error: {
          status: error.response?.status,
          data: error.response?.data || error.message,
        },
      }
    }
  };
