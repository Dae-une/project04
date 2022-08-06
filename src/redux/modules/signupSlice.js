import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const SignUpUsers = createAsyncThunk("SIGNUP_USERS", async () => {
  const response = await axios.get(process.env.REACT_APP_API_USERS);
  console.log(response.data);
  return response.data;
});

export const SignUpReducer = createSlice({
  name: "SignupUsers",
  initialState: {},
  reducers: {},
  extraReducers: {},
});
