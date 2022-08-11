import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCommentAysnc = createAsyncThunk(
  "comment/getComment",
  async (data, thunkAPI) => {
    try {
      const res = await axios.get(process.env.REACT_APP_API_COMMENTS);
      return res.data.filter((comment) => comment.postId == data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const postCommentAysnc = createAsyncThunk(
  "comment/postComment",
  async (data, thunkAPI) => {
    try {
      const res = await axios.post(process.env.REACT_APP_API_COMMENTS, data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// export const editCommentAysnc = createAsyncThunk(
//   "comment/editComment",
//   async (data, thunkAPI) => {
//     try {
//       const res = await axios.get(process.env.REACT_APP_API_COMMENTS);
//       const target = res.data.filter(
//         (comment) => comment.postId == data.postId
//       );
//       const idx = target.findIndex((comment) => comment.postId == data.postId);
//       return (target[idx].body = data.body);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

export const CommentSlice = createSlice({
  name: "CommentReducer",
  initialState: {
    body: "",
    author: "",
    postId: "",
    id: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCommentAysnc.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(postCommentAysnc.fulfilled, (state, action) => {
        state.data.push(action.payload);
      });
  },
});

export default CommentSlice;
