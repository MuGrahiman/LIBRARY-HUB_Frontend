import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../Axios/axiosInstance";

const fetchLibrary = createAsyncThunk(
  "library/fetch",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/library/fetch");
      await pause(1000);
      return response.data.result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const fetchSingleLibrary = createAsyncThunk(
  "library/singlefetch",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/library/fetch");
      await pause(1000);
      return response.data.result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const addLibrary = createAsyncThunk(
  "library/add",
  async (data, { rejectWithValue }) => {
    // const config = {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // };

    try {
      console.log(data);
      const response = await axiosInstance.post("/library/add", data);
      await pause(1000);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const logLibrary = createAsyncThunk(
  "library/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`/library/login`, data);
      await pause(1000);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const updateLibrary = createAsyncThunk(
  "library/update",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(`/library/update/${data.id}`);
      await pause(1000);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const blockLibrary = createAsyncThunk(
  "library/block",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.patch(`/library/block/${data.id}`);
      await pause(1000);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const unBlockLibrary = createAsyncThunk(
  "library/unblock",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.patch(`/library/unblock/${data.id}`);
      await pause(1000);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

export {
  fetchLibrary,
  fetchSingleLibrary,
  addLibrary,
  logLibrary,
  unBlockLibrary,
  blockLibrary,
  updateLibrary,
};
