import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/Cake/cakeSlice";
import mikReducer from "../features/mik/mikSlice";
import userReducer from "../features/user/userReducer";

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    milk: mikReducer,
    users: userReducer,
  },
});

export default store;
