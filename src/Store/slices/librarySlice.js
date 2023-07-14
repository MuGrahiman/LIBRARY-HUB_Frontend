import { createSlice } from "@reduxjs/toolkit";
import { fetchLibrary, addLibrary, blockLibrary, unBlockLibrary, updateLibrary, logLibrary } from "../thunks/libraryThunk";

const libraryDataSlice = createSlice({
  name: "library",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },

  reducers: {
    // addLibrary(state, action) {
    //   state.push(action.payload);
    // },
    // removeLibrary(state, action) {
    //   const index = state.indexOf(action.payload);
    //   state.splice(index, 1);
    // },
    // reset(state, action) {
    //   console.log("");
    // },
  },
  extraReducers: (builder) => {
    //Fetch Library Data
    builder.addCase(fetchLibrary.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchLibrary.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchLibrary.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    //ADD New Library
    builder.addCase(addLibrary.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addLibrary.fulfilled, (state, action) => {
      state.isLoading = false;
      // state.data = action.payload;
    });
    builder.addCase(addLibrary.rejected, (state, action) => {
      state.isLoading = false;
      console.log(action)
      state.error = action.error.message;
    });
    //Log-In The Library
    builder.addCase(logLibrary.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(logLibrary.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(logLibrary.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    //Update A Library ?????
    builder.addCase(updateLibrary.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updateLibrary.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(updateLibrary.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    //Block An Library
    builder.addCase(blockLibrary.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(blockLibrary.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(blockLibrary.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    //UnBlock An Library
    builder.addCase(unBlockLibrary.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(unBlockLibrary.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(unBlockLibrary.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

  },
});


export const libraryReducer = libraryDataSlice.reducer;
