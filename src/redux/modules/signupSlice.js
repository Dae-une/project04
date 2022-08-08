import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const SignUpUsersAysnc = createAsyncThunk(
  "users/sigupUsers",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(
        process.env.REACT_APP_API_USERS,
        userData
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getUsersAysnc = createAsyncThunk(
  "users/getUsers",
  async (thunkAPI) => {
    try {
      const res = await axios.get(process.env.REACT_APP_API_USERS);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const SignUp = createSlice({
  name: "SignupUsers",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(SignUpUsersAysnc.pending, (state, action) => {})
      .addCase(SignUpUsersAysnc.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(SignUpUsersAysnc.rejected, (state, action) => {})
      .addCase(getUsersAysnc.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(getUsersAysnc.rejected, (state, action) => {
        state = action.payload;
      });
  },
});

export default SignUp;
