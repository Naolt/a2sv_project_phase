import React, { useEffect, useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  TextField,
  styled,
  Stack,
  Typography,
  Box,
  Collapse,
  Button,
  MenuItem,
  Select,
} from "@mui/material";
import { TransitionGroup } from "react-transition-group";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, completeTodo, deleteTodo, editTodo } from "@/store/actions";
import { Task } from "@/model";
import {
  useGetTasksQuery,
  useAddTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} from "../store/reducer";

const StyledListItemText = styled(ListItemText)(({ theme }) => ({}));
const StyledBox = styled(Box)(({ theme }) => ({}));

const DeleteIconButton = styled(IconButton)(({ theme }) => ({
  "&:hover": {
    backgroundColor: "transparent",
  },
}));

function Home() {
  const dispatch = useDispatch();

  //const state = useSelector((state: Task[]) => state);
  const [newTask, setNewTask] = useState("");
  const [editTask, setEditTask] = useState<Task | null>();
  const [filter, setFilter] = useState("");

  const {
    data: state,
    //isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTasksQuery();

  console.log("here are the tasks");
  console.log("here are the tasks", state);

  const [addTask, { isLoading: isLoadingAddTask }] = useAddTaskMutation();
  const [updateTask, {}] = useUpdateTaskMutation();
  const [deleteTask, {}] = useDeleteTaskMutation();

  const handleToggle = async (taskId: string) => {
    if (taskId) {
      try {
        let filtered = state.filter((task: Task) => task.id === taskId);
        await updateTask({
          ...filtered[0],
          completed: !filtered[0].completed,
        }).unwrap();
      } catch (error) {
        console.error("Failed to toogle task", error);
      }
    }
  };

  const handleDelete = async (taskId: string) => {
    if (taskId) {
      try {
        await deleteTask({ id: taskId }).unwrap();
      } catch (error) {
        console.error("Failed to delete the task", error);
      }
    }
  };

  const handleAddTask = async () => {
    if (newTask.trim() === "") {
      return;
    }
    try {
      await addTask({ title: newTask, completed: false }).unwrap();
    } catch (error) {
      console.error("Failed to add the task", error);
    }

    setNewTask("");
  };

  const handleUpdateTask = async () => {
    if (editTask?.id) {
      try {
        await updateTask({ ...editTask }).unwrap();
      } catch (error) {
        console.error("Failed to add the task", error);
      } finally {
        setEditTask(null);
      }
    }
  };

  const handleTaskEdit = (title: string, id: string, completed: boolean) => {
    console.log(title);
    setEditTask({ title, id, completed });
  };

  const handleReset = async (tasks) => {
    console.log("here i am", tasks);
    tasks?.forEach((task) => handleDelete(task.id));
  };

  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "#f5f5f5",
        padding: "2rem",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ marginBottom: 5 }}
        color="secondary"
        data-test="header-text"
      >
        Todo List
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <div className="flex items-start gap-8">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="text-neutral-600 py-2 text-center outline-blue-700"
            data-test="filter-task"
          >
            <option value={""}>All</option>
            <option value={"true"} data-test="filter-completed">
              Completed
            </option>
            <option value={"false"} data-test="filter-not-completed">
              Not Completed
            </option>
          </select>
          <TextField
            label="Add Task"
            variant="outlined"
            value={newTask}
            size="small"
            onChange={(e) => setNewTask(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleAddTask();
              }
            }}
            inputProps={{ "data-testid": "add-task-input" }}
            sx={{ marginBottom: "1rem" }}
            data-test="add-task-input"
          />

          <button
            className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition-all"
            disabled={!newTask}
            onClick={() => handleAddTask()}
            data-test="add-task-button"
          >
            Add
          </button>
          <button
            className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition-all"
            onClick={() => handleReset(state)}
            data-test="reset-task-button"
          >
            Reset
          </button>
        </div>
      </Box>
      <List
        dense
        sx={{
          width: "100%",
          maxWidth: 360,
          margin: "0 auto",
          bgcolor: "white",
          borderRadius: "8px",
        }}
      >
        <TransitionGroup>
          {state
            ?.filter((task: Task) => {
              if (filter == "true" && task.completed) {
                return true;
              } else if (filter == "false" && !task.completed) {
                return true;
              } else if (filter == "") {
                return true;
              }
              return false;
            })
            .map((task: Task) => (
              <Collapse key={task.id} in={true}>
                <ListItem>
                  <Checkbox
                    edge="start"
                    checked={task.completed}
                    onChange={() => handleToggle(task.id)}
                    inputProps={{
                      "aria-labelledby": `checkbox-list-secondary-label-${task.id}`,
                    }}
                    data-test="task-checkbox"
                  />
                  <StyledBox
                    sx={{
                      display: "flex",
                      ":hover": {
                        bgcolor: "#eee",
                      },
                      width: "100%",
                      paddingX: 1,
                      borderRadius: 2,
                      transition: "all 0.3s linear",
                    }}
                  >
                    <StyledListItemText
                      primary={
                        <TextField
                          value={
                            editTask?.id === task.id
                              ? editTask.title
                              : task.title
                          }
                          onChange={(e) =>
                            handleTaskEdit(
                              e.target.value,
                              task.id,
                              task.completed
                            )
                          }
                          onKeyPress={(e) => {
                            if (e.key === "Enter") {
                              handleUpdateTask();
                            }
                          }}
                          fullWidth
                          sx={{
                            textDecoration: task.completed
                              ? "line-through"
                              : "none",
                            color: task.completed
                              ? "rgba(0, 0, 0, 0.5)"
                              : "inherit",
                          }}
                          label="task-title-input"
                          variant="standard"
                          InputProps={{
                            disableUnderline: true,
                            "data-test": "task-title-input",
                          }}
                          disabled={task.completed}
                        />
                      }
                    />
                    <button
                      onClick={() => handleDelete(task.id)}
                      className="delete-icon"
                      data-test={`delete-task`}
                    >
                      <DeleteIconButton aria-label="delete" sx={{ opacity: 1 }}>
                        <DeleteIcon />
                      </DeleteIconButton>
                    </button>
                  </StyledBox>
                </ListItem>
              </Collapse>
            ))}
        </TransitionGroup>
      </List>
    </div>
  );
}

export default Home;
