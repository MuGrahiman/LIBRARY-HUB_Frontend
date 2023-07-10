import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { libraryReducer } from "./slices/librarySlice";
import { plansApi as adminPlansApi } from "./apis/Admin/plansApi";
import { LoginApi as adminLoginApi } from "./apis/Admin/LoginApi";
import { Api as libraryLoginApi } from "./apis/Library/LoginApi";
import { Api as libraryPlansApi } from "./apis/Library/PlansApi";
import { Api as booksApi } from "./apis/Library/BooksApi";
import { Api as UserApi } from "./apis/Library/UserApi";
import { Api as CategoryApi } from "./apis/Library/CategoryApi";
// import { setupListeners } from "@reduxjs/toolkit/q./apis/Library/plansApiuery";

const store = configureStore({
  //when ever create new api call  here like this
  reducer: {
    [adminLoginApi.reducerPath]: adminLoginApi.reducer,
    [adminPlansApi.reducerPath]: adminPlansApi.reducer,
    library: libraryReducer, //redux thunk
    [libraryLoginApi.reducerPath]: libraryLoginApi.reducer,
    [libraryPlansApi.reducerPath]: libraryPlansApi.reducer,
    [booksApi.reducerPath]: booksApi.reducer,
    [UserApi.reducerPath]: UserApi.reducer,
    [CategoryApi.reducerPath]: CategoryApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(adminPlansApi.middleware)
      .concat(adminLoginApi.middleware)
      .concat(libraryLoginApi.middleware)
      .concat(libraryPlansApi.middleware)
      .concat(booksApi.middleware)
      .concat(UserApi.middleware)
      .concat(CategoryApi.middleware);
    //when ever you create an api you got an middleware and also connect the middle ware like this
    // .concat(adminPlanApi.middleware);
  },
});

setupListeners(store.dispatch);

export { store };
export * from "./thunks/libraryThunk";
export { useLogAdminMutation } from "./apis/Admin/LoginApi";
export {
  useFetchPlansQuery,
  useAddPlansMutation,
  useFetchSinglePlansQuery,
  useUpdateSinglePlansMutation,
  useRemovePlansMutation,
} from "./apis/Admin/plansApi";
export {
  useLogLibraryMutation,
  useOTPMutation,
  useResendMutation,
} from "./apis/Library/LoginApi";
export {
  useFetchLibraryPlansQuery,
  useAddLibraryPlansMutation,
  useFetchLibrarySinglePlansQuery,
  useUpdateLibrarySinglePlansMutation,
  useRemoveLibraryPlansMutation,
} from "./apis/Library/PlansApi";
export {
  useAddBookMutation,
  useEditBookMutation,
  useFetchBooksQuery,
  useGetBookQuery,
  useRemoveBookMutation,
} from "./apis/Library/BooksApi";
export {
  useAddUserMutation,
  useEditUserMutation,
  useFetchUsersQuery,
  useGetUserQuery,
  useToggleUserMutation,
} from "./apis/Library/UserApi.js";
export {
  useAddCategoryMutation,
  useFetchCategoriesQuery,
  useFetchCategoryQuery,
  useRemoveCategoryMutation,
  useUpdateCategoryMutation,
} from "./apis/Library/CategoryApi";
