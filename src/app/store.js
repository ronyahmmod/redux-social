import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/user/userSlice";
import componentReducer from "../feature/component/componentSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    component: componentReducer,
  },
});

export default store;
