import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// @reduxjs/toolkit/query does not create any custum hook use above query
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

const plansApi = createApi({
  reducerPath: "plans",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4001/plans",
    fetchFn: async (...arg) => {
      await pause(1000);
      return fetch(...arg);
    },
  }),
  endpoints(builder) {
    return {
      fetchPlans: builder.query({
        providesTags: (res, err, arg) => {
          return [{ type: "Plan" }];
        },
        query: (data) => {
          const {Role} = data
          return {
            url: `/${Role}/fetch`,
            params: {},
            method: "GET",
          };
        },
      }),
      fetchSinglePlans: builder.query({
        // providesTags:(res,err,arg)=>{
        //   return [{type:'Plan',id:arg.id}]
        // },
        invalidatesTags: (res, err, arg) => {
          return [{ type: "Plan" }];
        },
        query: (data) => {
          const {Role,Plan} = data
          return {
            url: `/${Role}/single`,
            params: { planId: Plan._id },
            method: "GET",
          };
        },
      }),
      updateSinglePlans: builder.mutation({
        // providesTags:(res,err,arg)=>{
        //   return [{type:'Plan',id:arg.id}]
        // },
        invalidatesTags: (res, err, arg) => {
          return [{ type: "Plan" }];
        },

        query: (data) => {
          const {Role, Plan, Data } = data;
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
      addPlans: builder.mutation({
        invalidatesTags: (res, err, arg) => {
          return [{ type: "Plan" }];
        },
        query: (data) => {
          const {Role,Data } = data;

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
      removePlans: builder.mutation({
        invalidatesTags: (res, err, arg) => {
          return [{ type: "Plan" }];
        },
        query: (data) => {
          const {Role,Plan } = data;
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
  useFetchPlansQuery,
  useAddPlansMutation,
  useFetchSinglePlansQuery,
  useUpdateSinglePlansMutation,
  useRemovePlansMutation,
} = plansApi;

export { plansApi };
