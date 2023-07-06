  import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// @reduxjs/toolkit/query does not create any custum hook use above query
  const pause = (duration)=>{
    return new Promise((resolve)=>{
    setTimeout(resolve,duration);
    })
  } 

  const Api = createApi({
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
        fetchLibraryPlans: builder.query({
          providesTags:(res,err,arg)=>{
            return [{type:'Plan'}]
          },
          query: () => {
            return {
              url: "/library/fetch",
              params: {},
              method: "GET",
            };
          },
        }),
        fetchLibrarySinglePlans: builder.query({
        
          invalidatesTags:(res,err,arg)=>{
            return [{type:'Plan'}]
          },
          query: (plan) => {
            return {
              url: `/library/single`,
              params: {planId:plan._id},
              method: "GET",
            };
          },
        }),
        updateLibrarySinglePlans: builder.mutation({
          
          invalidatesTags:(res,err,arg)=>{
            return [{type:'Plan'}]
          },
        
          query: (data) => {
            const {plan,formData} = data
            console.log(plan._id)
            console.log(formData)
            return {
              url: `/library/single`,
              params: {planId:plan._id},
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            };
          },
        }),
        addLibraryPlans: builder.mutation({
          invalidatesTags:(res,err,arg)=>{
            return [{type:'Plan'}]
          },
          query: (data) => {
            return {
              url: "/library/add",
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              params: {},
              body: JSON.stringify(data),
            };
          },
        }),
        removeLibraryPlans: builder.mutation({
          invalidatesTags:(res,err,arg)=>{
            return [{type:'Plan'}]
          },
          query: (plan) => {
            return {
              url: `/library/remove`,
              method: "DELETE",
              params:{planId:plan._id}
            };
          },
        }),
      };
    },
  });

  export const { useFetchLibraryPlansQuery,useAddLibraryPlansMutation,useFetchLibrarySinglePlansQuery,useUpdateLibrarySinglePlansMutation, useRemoveLibraryPlansMutation } = Api;

  export { Api };
