import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./reducer";

export default configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
