import axios from "axios";
import Todo from "./assets/components/Todo";

const API_BASE_URL = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = async (): Promise<Todo[]> => {
  const response = await axios.get(API_BASE_URL);
  return response.data.slice(0, 5); // Limiting to first 5 todos for simplicity
};

export const addTodo = async (text: string): Promise<Todo> => {
  const response = await axios.post(API_BASE_URL, {
    text,
    completed: false,
  });
  return response.data;
};

export const updateTodo = async ({
  id,
  text,
}: {
  id: number;
  text: string;
}): Promise<Todo> => {
  const response = await axios.put(`${API_BASE_URL}/${id}`, {
    text,
  });
  return response.data;
};

export const deleteTodo = async (id: number): Promise<void> => {
  await axios.delete(`${API_BASE_URL}/${id}`);
};
