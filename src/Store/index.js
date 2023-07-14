import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { libraryReducer } from "./slices/librarySlice";
// import { plansApi as adminPlansApi } from "./apis/Admin/AdminplansApi";
import { Api as PlansApi } from "./apis/PlansApi";
import { LoginApi as adminLoginApi } from "./apis/Admin/LoginApi";
import { Api as libraryLoginApi } from "./apis/Library/LoginApi";
import { Api as booksApi } from "./apis/Library/BooksApi";
import { Api as UserApi } from "./apis/Library/UserApi";
import { Api as CategoryApi } from "./apis/Library/CategoryApi";
const store = configureStore({
  //when ever create new api call  here like this
  reducer: {
    [PlansApi.reducerPath]: PlansApi.reducer,
    [adminLoginApi.reducerPath]: adminLoginApi.reducer,
    library: libraryReducer, //redux thunk
    [libraryLoginApi.reducerPath]: libraryLoginApi.reducer,
    [booksApi.reducerPath]: booksApi.reducer,
    [UserApi.reducerPath]: UserApi.reducer,
    [CategoryApi.reducerPath]: CategoryApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {

    return getDefaultMiddleware({serializableCheck:false})
      .concat(PlansApi.middleware)
      .concat(adminLoginApi.middleware)
      .concat(libraryLoginApi.middleware)
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
export {
  useFetchPlansQuery,
  useAddPlansMutation,
  useFetchSinglePlansQuery,
  useUpdateSinglePlansMutation,
  useRemovePlansMutation,
} from "./apis/PlansApi";
export { useLogAdminMutation } from "./apis/Admin/LoginApi";
export {
  useLogLibraryMutation,
  useOTPMutation,
  useResendMutation,
} from "./apis/Library/LoginApi";

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
