import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../Axios/axiosInstance";
// @reduxjs/toolkit/query does not create any custum hook use above query
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};
const token = localStorage.getItem("user");
const Api = createApi({
  reducerPath: "users",
  baseQuery: axiosBaseQuery({
    baseUrl: "http://localhost:4001/users",
    fetchFn: async (...arg) => {
      await pause(1000);
      return fetch(...arg);
    },
    prepareHeaders: (headers) => {
      headers["Authorization"] = `Bearer ${token}`;
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchUsers: builder.query({
        providesTags: (res, err, arg) => {
          return [{ type: "Users" }];
        },
        query: () => {
          return {
            url: "/fetch",
            params: {},
            method: "GET",
          };
        },
      }),
      getUser: builder.query({
        invalidatesTags: (res, err, arg) => {
          return [{ type: "Users" }];
        },
        query: (data) => {
          return {
            url: `/single`,
            params: { Id: data._id },
            method: "GET",
          };
        },
      }),

      addUser: builder.mutation({
        invalidatesTags: (res, err, arg) => {
          return [{ type: "Users" }];
        },
        query: (data) => {
          return {
            url: "/add",
            method: "POST",
            params: {},
            body: data,
          };
        },
      }),

      editUser: builder.mutation({
        invalidatesTags: (res, err, arg) => {
          return [{ type: "User" }];
        },

        query: (data) => {
          return {
            url: `/single`,
            params: { Id: data.Id },
            method: "PUT",
            headers: {
              "Content-Type": "multipart/form-data",
            },
            body: data.Data,
          };
        },
      }),

      toggleUser: builder.mutation({
        invalidatesTags: (res, err, arg) => {
          return [{ type: "Book" }];
        },
        query: (plan) => {
          return {
            url: `/remove`,
            method: "PATCH",
            params: { planId: plan._id },
          };
        },
      }),
    };
  },
});

export const {
  useAddUserMutation,
  useEditUserMutation,
  useFetchUsersQuery,
  useGetUserQuery,
  useToggleUserMutation,
} = Api;

export { Api };
