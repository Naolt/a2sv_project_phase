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

const StyledListItemText = styled(ListItemText)(({ theme }) => ({}));
const StyledBox = styled(Box)(({ theme }) => ({}));

const DeleteIconButton = styled(IconButton)(({ theme }) => ({
  "&:hover": {
    backgroundColor: "transparent",
  },
}));

function Home() {
  const dispatch = useDispatch();

  const state = useSelector((state: Task[]) => state);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("");

  const handleToggle = (taskId: string) => {
    if (taskId) {
      console.log(taskId);
      dispatch(completeTodo(taskId));
    }
  };

  const handleDelete = (taskId: string) => {
    if (taskId) {
      dispatch(deleteTodo(taskId));
    }
  };

  const handleAddTask = () => {
    if (newTask.trim() === "") {
      return;
    }

    dispatch(addTodo(newTask.trim()));

    setNewTask("");
  };

  const handleUpdateTask = (
    taskId: string,
    newTitle: string,
    completed: boolean
  ) => {
    if (taskId) {
      dispatch(editTodo(taskId, newTitle, completed));
    }
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
          >
            <option value={""}>All</option>
            <option value={"true"}>Completed</option>
            <option value={"false"}>Not Completed</option>
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
            //data-testid=""
          />

          <button
            className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition-all"
            disabled={!newTask}
            onClick={() => handleAddTask()}
          >
            Add
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
            .filter((task: Task) => {
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
                      "data-testid": `checkbox-task-${task.id}`,
                    }}
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
                          value={task.title}
                          onChange={(e) =>
                            handleUpdateTask(
                              task.id,
                              e.target.value,
                              task.completed
                            )
                          }
                          fullWidth
                          sx={{
                            textDecoration: task.completed
                              ? "line-through"
                              : "none",
                            color: task.completed
                              ? "rgba(0, 0, 0, 0.5)"
                              : "inherit",
                          }}
                          variant="standard"
                          InputProps={{
                            disableUnderline: true,
                          }}
                          inputProps={{
                            "data-testid": `task-title-${task.id}`,
                          }}
                          disabled={task.completed}
                        />
                      }
                    />
                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={1}
                      sx={{ opacity: 1, transition: "opacity 0.3s" }}
                      className="delete-icon"
                    >
                      <DeleteIconButton
                        aria-label="delete"
                        sx={{ opacity: 1 }}
                        onClick={() => handleDelete(task.id)}
                        data-testid={`delete-task-${task.id}`}
                      >
                        <DeleteIcon />
                      </DeleteIconButton>
                    </Stack>
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
