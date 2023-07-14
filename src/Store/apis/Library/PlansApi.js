import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// @reduxjs/toolkit/query does not create any custum hook use above query
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

const Api = createApi({
  reducerPath: "LibrarPlan",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4001/plans",
    fetchFn: async (...arg) => {
      await pause(1000);
      return fetch(...arg);
    },
  }),

  endpoints(builder) {
    return {
      fetchLibraryPlans: builder.query({
        providesTags: (res, err, arg) => {
          return [{ type: "LibraryPlan" }];
        },
        query: (data) => {
          const { Role } = data;
          return {
            url: `/${Role}/fetch`,
            params: {},
            method: "GET",
          };
        },
      }),

      fetchLibrarySinglePlans: builder.query({
        invalidatesTags: (res, err, arg) => {
          return [{ type: "LibraryPlan" }];
        },
        query: (data) => {
          const { Role, Plan } = data;
          return {
            url: `/${Role}/single`,
            params: { planId: Plan._id },
            method: "GET",
          };
        },
      }),

      updateLibrarySinglePlans: builder.mutation({
        invalidatesTags: (res, err, arg) => {
          return [{ type: "LibraryPlan" }];
        },

        query: (data) => {
          const { Role, Plan, Data } = data;
          console.log(Plan._id);
          console.log(Data);
          return {
            url: `/${Role}/single`,
            params: { planId: Plan._id },
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(Data),
          };
        },
      }),

      addLibraryPlans: builder.mutation({
        invalidatesTags: (res, err, arg) => {
          return [{ type: "LibraryPlan" }];
        },
        query: (data) => {
          const { Role, Data } = data;

          return {
            url: `/${Role}/add`,
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            params: {},
            body: JSON.stringify(Data),
          };
        },
      }),
      
      removeLibraryPlans: builder.mutation({
        invalidatesTags: [{ type: "LibraryPlan" }],

        query: (data) => {
          const { Role, Plan } = data;
          return {
            url: `/${Role}/remove`,
            method: "DELETE",
            params: { planId: Plan._id },
          };
        },
      }),
    };
  },
});

export const {
  useFetchLibraryPlansQuery,
  useAddLibraryPlansMutation,
  useFetchLibrarySinglePlansQuery,
  useUpdateLibrarySinglePlansMutation,
  useRemoveLibraryPlansMutation,
} = Api;

export { Api };
