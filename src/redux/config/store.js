import { configureStore } from "@reduxjs/toolkit";

import SignUp from "../modules/signupSlice";

const store = configureStore({
  reducer: SignUp.reducer,
});

export default store;
