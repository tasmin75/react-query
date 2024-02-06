import React from "react";
import { useQuery, useMutation, QueryClient } from "react-query";
import { fetchTodos, addTodo, updateTodo, deleteTodo } from "../api";
import Todo from "./Todo";

const Todos: React.FC = () => {
  const queryClient = new QueryClient();

  // Fetch todos query
  const {
    data: todos,
    isLoading,
    isError,
  } = useQuery<Todo[]>("todos", fetchTodos);

  // Mutations for add, update, and delete
  const addTodoMutation = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const updateTodoMutation = useMutation(updateTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const deleteTodoMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const handleAddTodo = async (text: string) => {
    await addTodoMutation.mutateAsync(text);
  };

  const handleUpdateTodo = async (id: number, text: string) => {
    await updateTodoMutation.mutateAsync({ id, text }); // pass an object with id and text properties
  };

  const handleDeleteTodo = async (id: number) => {
    await deleteTodoMutation.mutateAsync(id);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching todos</div>;
  }

  return (
    <div>
      <h1
        style={{
          fontWeight: "bold",
          color: "rgb(6, 6, 81",
        }}
      >
        Todo App
      </h1>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          listStyle: "none",
          gap: "10px",
        }}
      >
        {todos?.map((todo) => (
          <li key={todo.id}>
            {todo.text}{" "}
            <button
              style={{
                color: "white",
                padding: "8px",
                backgroundColor: "green",
                border: "none",
                borderRadius: "2px",
              }}
              onClick={() => handleUpdateTodo(todo.id, "Updated Text")}
            >
              Update
            </button>{" "}
            <button
              style={{
                color: "white",
                padding: "8px",
                backgroundColor: "rgb(251, 0, 0)",
                border: "none",
                borderRadius: "5px",
              }}
              onClick={() => handleDeleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Add Todo"
          style={{
            padding: "8px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAddTodo((e.target as HTMLInputElement).value);
              (e.target as HTMLInputElement).value = "";
            }
          }}
        />
        <button
          style={{
            padding: "8px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "rgb(6, 6, 81",
            color: "white",
          }}
          onClick={() => handleAddTodo("New Todo")}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Todos;
