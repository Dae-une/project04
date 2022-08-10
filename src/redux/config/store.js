import { configureStore } from "@reduxjs/toolkit";
import Write from "../modules/writeSlice";
import SignUp from "../modules/signupSlice";
import CommentSlice from "../modules/commentslice";
import PostSlice from "../modules/postSlice";
const store = configureStore({
  reducer: {
    SignUp: SignUp.reducer,
    Write: Write.reducer,
    Comment: CommentSlice.reducer,
    Post: PostSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
