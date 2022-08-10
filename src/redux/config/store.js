import { configureStore } from "@reduxjs/toolkit";
import  Write  from "../modules/writeSlice";
import SignUp from "../modules/signupSlice";

const store = configureStore({
  reducer: {
    SignUp:SignUp.reducer,
    Write:Write.reducer
  }
});

export default store;
