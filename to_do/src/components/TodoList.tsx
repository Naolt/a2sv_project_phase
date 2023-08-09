import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
import "./styles.css";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodos }: Props) => {
  return (
    <div className="container">
      <Droppable droppableId="TodosList">
        {(provided) => (
          <div
            className="todos"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__heading">Active Tasks</span>
            {todos
              .filter((todo) => !todo.isDone)
              .map((todo, index) => {
                return (
                  <SingleTodo
                    index={index}
                    todo={todo}
                    todos={todos}
                    setTodos={setTodos}
                  />
                );
              })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="TodosRemove">
        {(provided) => (
          <div
            className="todos remove"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__heading">Completed Tasks</span>
            {todos
              .filter((todo) => todo.isDone)
              .map((todo, index) => {
                return (
                  <SingleTodo
                    index={index}
                    todo={todo}
                    todos={todos}
                    setTodos={setTodos}
                  />
                );
              })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
