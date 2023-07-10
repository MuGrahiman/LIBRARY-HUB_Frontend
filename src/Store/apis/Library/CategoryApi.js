import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// @reduxjs/toolkit/query does not create any custum hook use above query
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

const Api = createApi({
  reducerPath: "category",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4001/category",
    fetchFn: async (...arg) => {
      await pause(1000);
      return fetch(...arg);
    },
  }),
  endpoints(builder) {
    return {
      fetchCategories: builder.query({
        providesTags: (res, err, arg) => {
          return [{ type: "category" }];
        },
        query: () => {
          return {
            url: `/fetch`,
            params: {},
            method: "GET",
          };
        },
      }),
      fetchCategory: builder.query({
        invalidatesTags: (res, err, arg) => {
          return [{ type: "category" }];
        },
        query: (data) => {
          return {
            url: `/single`,
            params: { categoryId: data._id },
            method: "GET",
          };
        },
      }),
      updateCategory: builder.mutation({
        invalidatesTags: (res, err, arg) => {
          return [{ type: "category" }];
        },

        query: (data) => {
          const { Data, ID } = data;
          return {
            url: `/single`,
            params: { categoryId: ID },
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: Data,
          };
        },
      }),
      addCategory: builder.mutation({
        invalidatesTags: (res, err, arg) => {
          return [{ type: "category" }];
        },
        query: (data) => {
          console.log(JSON.stringify(data))
          return {
            url: `/add`,
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            params: {},
            body: data ,
          };
        },
      }),
      removeCategory: builder.mutation({
        invalidatesTags: (res, err, arg) => {
          return [{ type: "category" }];
        },
        query: (data) => {
          return {
            url: `/remove`,
            method: "DELETE",
            params: { categoryId: data._id },
          };
        },
      }),
    };
  },
});

export const {
  useAddCategoryMutation,
  useFetchCategoriesQuery,
  useFetchCategoryQuery,
  useRemoveCategoryMutation,
  useUpdateCategoryMutation,
} = Api;

export { Api };
