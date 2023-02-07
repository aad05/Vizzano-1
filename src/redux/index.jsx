import { configureStore } from "@reduxjs/toolkit";
import otkSlice from "./otkSlice";

export default configureStore({
  reducer: {
    otk: otkSlice,
  },
});
