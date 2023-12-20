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
  reducerPath: "books",
  baseQuery: axiosBaseQuery({ 
    baseUrl: "http://localhost:4001/books",
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
      fetchBooks: builder.query({
        providesTags: (res, err, arg) => {
          return [{ type: "Book" }];
        },
        query: ({Role,ID}) => {
          console.log(ID)
          return {
            url: "/fetch",
            params: {LibraryId:ID,Role},
            method: "GET",

          };
        },
      }),
      getBook: builder.query({
        invalidatesTags: (res, err, arg) => {
          return [{ type: "Book" }];
        },
        query: (data) => {
          return {
            url: `/single`,
            params: { Id: data._id},
            method: "GET",
          };
        },
      }),

      addBook: builder.mutation({
        invalidatesTags: (res, err, arg) => {
          return [{ type: "Book" }];
        },
        query: ({Data,Role}) => {
          console.log(Data,Role)
          return {
            url: "/add",
            method: "POST",
              headers: {
              "Content-Type": `multipart/form-data`,
            },
            params: {Role},
            body: Data,
          };
        },
      }),

      editBook: builder.mutation({
        invalidatesTags: (res, err, arg) => {
          return [{ type: "Book" }];
        },

        query: ({Data,Role}) => {
          
          return {
            url: `/single`,
            params: { Id: Data.Id },
            method: "PUT",
            headers: {
              "Content-Type": "multipart/form-data",
            },
            body: Data.Data,
          };
        },
      }),
  
      removeBook: builder.mutation({
        invalidatesTags: (res, err, arg) => {
          return [{ type: "Book" }];
        },
        query: (plan) => {
          return {
            url: `/remove`,
            method: "DELETE",
            params: { planId: plan._id },
          };
        },
      }),
    };
  },
});

export const {
  useAddBookMutation,
  useEditBookMutation,
  useFetchBooksQuery,
  useGetBookQuery,
  useRemoveBookMutation,
} = Api;

export { Api };
