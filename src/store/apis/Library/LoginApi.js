
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

const Api = createApi({
  reducerPath: "libraryLogin",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4001/library",
    fetchFn: async (...arg) => {
      await pause(1000);
      return fetch(...arg);
    },
  }),
  endpoints(builder) {
    return {
      logLibrary: builder.mutation({
    
        query: (data) => {
          return {
            url: "login",
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            params: {},
            body: JSON.stringify(data),
          };
        },
      }),
      OTP: builder.mutation({
    
        query: (data) => {
          return {
            url: "otp",
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            params: {},
            body: JSON.stringify(data),
          };
        },
      }),
      resend: builder.mutation({
    
        query: () => {
          return {
            url: "resend",
            method: "GET",
            params: {},
          };
        },
      }),
    };
  },
});
export const { useLogLibraryMutation,useOTPMutation,useResendMutation } = Api;
export { Api };
