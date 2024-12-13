import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "../features/menu/menu-slice";
const store = configureStore({
  reducer: {
    menu: menuSlice,
  },
});
export default store;
