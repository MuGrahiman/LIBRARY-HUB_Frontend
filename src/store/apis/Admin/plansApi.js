  import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// @reduxjs/toolkit/query does not create any custum hook use above query
  const pause = (duration)=>{
    return new Promise((resolve)=>{
    setTimeout(resolve,duration);
    })
  } 

  const plansApi = createApi({
    reducerPath: "plans",
    baseQuery: fetchBaseQuery({
      baseUrl: "http://localhost:4001/plans",
      fetchFn:async (...arg)=>{
        await pause(1000);
        return fetch(...arg);
      }
    }),
    endpoints(builder) {
      return {
        fetchPlans: builder.query({
          providesTags:(res,err,arg)=>{
            return [{type:'Plan'}]
          },
          query: () => {
            return {
              url: "/admin/fetch",
              params: {},
              method: "GET",
            };
          },
        }),
        fetchSinglePlans: builder.query({
          // providesTags:(res,err,arg)=>{
          //   return [{type:'Plan',id:arg.id}]
          // },
          invalidatesTags:(res,err,arg)=>{
            return [{type:'Plan'}]
          },
          query: (plan) => {
            return {
              url: `/admin/single`,
              params: {planId:plan._id},
              method: "GET",
            };
          },
        }),
        updateSinglePlans: builder.mutation({
          // providesTags:(res,err,arg)=>{
          //   return [{type:'Plan',id:arg.id}]
          // },
          invalidatesTags:(res,err,arg)=>{
            return [{type:'Plan'}]
          },
        
          query: (data) => {
            const {plan,formData} = data
            console.log(plan._id)
            console.log(formData)
            return {
              url: `/admin/single`,
              params: {planId:plan._id},
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            };
          },
        }),
        addPlans: builder.mutation({
          invalidatesTags:(res,err,arg)=>{
            return [{type:'Plan'}]
          },
          query: (data) => {
            return {
              url: "/admin/add",
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              params: {},
              body: JSON.stringify(data),
            };
          },
        }),
        removePlans: builder.mutation({
          invalidatesTags:(res,err,arg)=>{
            return [{type:'Plan'}]
          },
          query: (plan) => {
            return {
              url: `/admin/remove`,
              method: "DELETE",
              params:{planId:plan._id}
            };
          },
        }),
      };
    },
  });

  export const { useFetchPlansQuery,useAddPlansMutation,useFetchSinglePlansQuery,useUpdateSinglePlansMutation, useRemovePlansMutation } = plansApi;

  export { plansApi };
