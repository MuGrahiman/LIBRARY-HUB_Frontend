import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

const Api = createApi({
  reducerPath: "libraryLogin",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4001/",
    fetchFn: async (...arg) => {
      await pause(1000);
      return fetch(...arg);
    },
  }),
  endpoints(builder) {
    return {
      login: builder.mutation({
        query: (data) => {
          const { Role, Data } = data;
          let URL;
          if (Role === "user") URL = "users/login";
          if (Role === "library") URL = "library/login";
          return {
            url: URL,
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            params: {},
            body: JSON.stringify(Data),
          };
        },
      }),
      OTP: builder.mutation({
        query: (data) => {
          const { Role, Data, Id } = data;
          let URL;
          if (Role === "user") URL = "users/otp";
          if (Role === "library") URL = "library/otp";
          return {
            url: URL,
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            params: { Id },
            body: JSON.stringify(Data),
          };
        },
      }),
      resend: builder.mutation({
        query: (data) => {
          const { Role, Data, Id } = data;
          let URL;
          if (Role === "user") URL = "users/resend";
          if (Role === "library") URL = "library/resend";
          return {
            url: URL,
            method: "GET",
            params: { Id },
          };
        },
      }),
    };
  },
});
export const { useLoginMutation, useOTPMutation, useResendMutation } = Api;
export { Api };
