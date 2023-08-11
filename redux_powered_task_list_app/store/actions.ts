import { nanoid } from "@reduxjs/toolkit";
import {
  UPDATE_TASK,
  DELETE_TASK,
  ADD_TASK,
  COMPLETE_TASK,
} from "./actionTypes";
export const addTodo = (title: string) => {
  console.log("about to add task", nanoid());
  return {
    type: ADD_TASK,
    payload: { title: title, id: nanoid() },
  };
};
export const editTodo = (id: string, title: string, completed: boolean) => {
  return {
    type: UPDATE_TASK,
    payload: { id, title, completed },
  };
};
export const deleteTodo = (id: string) => {
  return {
    type: DELETE_TASK,
    payload: id,
  };
};
export const completeTodo = (id: string) => {
  return {
    type: COMPLETE_TASK,
    payload: id,
  };
};
