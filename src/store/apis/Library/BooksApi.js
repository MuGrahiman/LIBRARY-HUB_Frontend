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
        query: () => {
          return {
            url: "/fetch",
            params: {},
            method: "GET",

          };
        },
      }),
      getBook: builder.query({
        invalidatesTags: (res, err, arg) => {
          return [{ type: "Book" }];
        },
        query: (plan) => {
          return {
            url: `/single`,
            params: { planId: plan._id },
            method: "GET",
          };
        },
      }),

      addBook: builder.mutation({
        invalidatesTags: (res, err, arg) => {
          return [{ type: "Book" }];
        },
        query: (data) => {
        const boundary =  "yet another boundary"
          return {
            url: "/add",
            method: "POST",
              headers: {
              "Content-Type": `multipart/form-data`,
            },
            // boundary=----WebKitFormBoundary8GfjbenvSzsHc5Il
            params: {},
            body: data,
          };
        },
      }),

      editBook: builder.mutation({
        invalidatesTags: (res, err, arg) => {
          return [{ type: "Book" }];
        },

        query: (data) => {
          const { plan, formData } = data;
          console.log(plan._id);
          console.log(formData);
          return {
            url: `/single`,
            params: { planId: plan._id },
            method: "PUT",
            headers: {
              "Content-Type": "multipart/form-data",
            },
            body: JSON.stringify(formData),
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
