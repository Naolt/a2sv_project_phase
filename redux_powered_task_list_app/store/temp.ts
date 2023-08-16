import { Task } from "@/model";
const initialState: Task[] = [];

export function taskReducer(state = initialState, action: any) {
  // Check to see if the reducer cares about this action
  switch (action.type) {
    case ADD_TASK:
      const newTask: Task = {
        completed: false,
        title: action.payload?.title,
        id: action.payload?.id,
      };
      // If so, make a copy of `state`
      return [
        ...state,
        // and update the copy with the new value
        newTask,
      ];
    case UPDATE_TASK:
      const updatedTask: Task = {
        ...action.payload,
      };

      return state.map((task) => {
        if (task.id === action.payload.id) {
          return updatedTask;
        }
        return task;
      });
    case DELETE_TASK:
      const id = action.payload;
      //filter out the tasks other than the one to be deleted
      return state.filter((task) => task.id !== id);

    case COMPLETE_TASK:
      const taskId = action.payload;
      // make copy of the state and set the toggle the completed attribute
      return state.map((task) => {
        if (task.id === taskId) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
    default:
      // if the action is not known log error and do nothing
      console.log("Unknown Action", action);
      return state;
  }
}
