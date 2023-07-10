// import { createApi } from "@reduxjs/toolkit/dist/query";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

const LoginApi = createApi({
  reducerPath: "adminLogin",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4001/admin",
    fetchFn: async (...arg) => {
      await pause(1000);
      return fetch(...arg);
    },
  }),
  endpoints(builder) {
    return {
      logAdmin: builder.mutation({
        invalidatesTags: (res, err, arg) => {
          return [{ type: "adminLogin" }];
        },
        // providesTags:(res)=>console.log(`res${res}`),
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
    };
  },
});
export const { useLogAdminMutation } = LoginApi;
export { LoginApi };
