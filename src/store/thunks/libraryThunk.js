import { createAsyncThunk } from "@reduxjs/toolkit";
import {axiosInstance} from "../Axios/axiosInstance";

const fetchLibrary = createAsyncThunk("library/fetch", async () => {
  const response = await axiosInstance.get("/library/fetch");
  await pause(1000);
  console.log(response);
  return response.data.result;
});

const addLibrary = createAsyncThunk("library/add", async (data) => {
  // for (const pair of data.entries()) {
  //   console.log(pair[0], pair[1]);
  // }
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  const response = await axiosInstance.post("/library/add", data, config);
  await pause(1000);
  return response.data;
});

const logLibrary = createAsyncThunk("library/login", async (data) => {
  const response = await axiosInstance.post(`/library/login`,data);
  await pause(1000);
  return response.data;
});

const updateLibrary = createAsyncThunk("library/update", async (data) => {
  const response = await axiosInstance.put(`/library/update/${data.id}`);
  await pause(1000);
  return response.data;
});

const blockLibrary = createAsyncThunk("library/block", async (data) => {
  const response = await axiosInstance.patch(`/library/block/${data.id}`);
  await pause(1000);
  return response.data;
});

const unBlockLibrary = createAsyncThunk("library/unblock", async (data) => {
  const response = await axiosInstance.patch(`/library/unblock/${data.id}`);
  await pause(1000);
  return response.data;
});

const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

export {
  fetchLibrary,
  addLibrary,
  logLibrary,
  unBlockLibrary,
  blockLibrary,
  updateLibrary,
};
