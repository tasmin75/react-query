import React, { useState } from "react";
import { useQuery, useMutation, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const queryClient = new QueryClient();

const fetchTodos = async (): Promise<Todo[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  return data;
};

const addTodo = async (newTodo: string): Promise<Todo> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: newTodo,
      completed: false,
    }),
  });

  const data = await response.json();
  return data;
};

const TodoList: React.FC = () => {
  const { data: todos = [], isFetching } = useQuery<Todo[]>(
    "todos",
    fetchTodos
  );

  const mutation = useMutation<Todo, Error, string>(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const [newTodo, setNewTodo] = useState<string>("");

  const handleAddTodo = async () => {
    if (newTodo.trim() !== "") {
      await mutation.mutateAsync(newTodo.trim());
      setNewTodo("");
    }
  };

  if (isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "5px",
        backgroundColor: "white",
        maxWidth: "800px",
        margin: "20px auto",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          backgroundColor: "lightblue",
          padding: "20px",
          borderRadius: "5px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        To-Do List
      </h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          style={{
            padding: "12px 20px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
          placeholder="Add a new todo..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          style={{
            marginLeft: "10px",
            padding: "10px 10px",
            cursor: "pointer",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
          onClick={handleAddTodo}
        >
          Add Todo
        </button>
      </div>
      <ReactQueryDevtools />
    </div>
  );
};

export default TodoList;
