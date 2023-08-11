import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];

export const noteSlice = createSlice({
  name: "note",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addNote: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare(content) {
        return {
          payload: {
            id: nanoid(),
            content,
          },
        };
      },
    },
    editNote: (state, action) => {
      const note = state.find((note) => note.id === action.payload.id);
      note.content = action.payload.content;
    },
    deleteNote: (state, action) => {
      const index = state.findIndex(
        (task, index) => task.id === action.payload
      );
      state.splice(index, 1);
    },
  },
});

export const { addNote, editNote, deleteNote } = noteSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectNotes = (state) => state.note;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default noteSlice.reducer;
