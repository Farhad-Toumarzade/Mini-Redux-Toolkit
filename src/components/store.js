import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/Cake/cakeSlice";
import mikReducer from "../features/mik/mikSlice";

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    milk: mikReducer,
  },
});

export default store;
