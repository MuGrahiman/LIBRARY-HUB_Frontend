import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../Axios/axiosInstance";
// @reduxjs/toolkit/query does not create any custum hook use above query
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};
const token = localStorage.getItem('library')
const Api = createApi({
  reducerPath: "reserve",
  baseQuery: fetchBaseQuery({ 
    baseUrl: "http://localhost:4001/reserve",
    fetchFn:async (...arg)=>{
      await pause(1000);
      return fetch(...arg);
    },
    prepareHeaders: (headers) => {
      headers['Authorization'] = `Bearer ${token}`;
      return headers;
    },
  }),
  endpoints(builder) {
    return {

      fetchReservedData: builder.query({
        providesTags: (res, err, arg) => {
          return [{ type: "Reserve" }];
        },
        query: () => {
          return {
            url: "/fetch",
            params: {},
            method: "GET",

          };
        },
      }),

      getReservedData: builder.query({
        invalidatesTags: (res, err, arg) => {
          return [{ type: "Reserve" }];
        },
        query: (data) => {
          return {
            url: `/single`,
            params: { Id: data._id },
            method: "GET",
          };
        },
      }),

      addReservedData: builder.mutation({
        invalidatesTags: (res, err, arg) => {
          return [{ type: "Reserve" }];
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

      editReservedData: builder.mutation({
        invalidatesTags: (res, err, arg) => {
          return [{ type: "Reserve" }];
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
  
      deleteReservedData: builder.mutation({
        invalidatesTags: (res, err, arg) => {
          return [{ type: "Reserve" }];
        },
        query: (plan) => {
          return {
            url: `/toggle`,
            method: "DELETE",
            params: { planId: plan._id },
          };
        },
      }),

    };
  },
});

export const {
  useAddReservedDataMutation,
  useEditReservedDataMutation,
  useFetchReservedDataQuery,
  useGetReservedDataQuery,
useDeleteReservedDataMutation
} = Api;

export { Api };
