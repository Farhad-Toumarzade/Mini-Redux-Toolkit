import userSlice from "../features/user/userSlice";
import cakeSlice from "../features/Cake/cakeSlice";
import milkSlice from "../features/milk/milkSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    cake: cakeSlice,
    milk: milkSlice,
    users: userSlice,
  },
});

export default store;
