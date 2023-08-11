import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "../features/note/noteSlice"; // Import the reducer from the noteSlice module

// Configure the Redux store using the configureStore function
export const store = configureStore({
  reducer: {
    note: noteReducer, // Add the noteReducer as a slice named 'note' in the store
  },
});
