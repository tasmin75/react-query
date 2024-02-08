import axios from "axios";
import Todo from "./components/Todo";

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

interface Post {
  id: number;
  // Add other properties based on your Post type
  title: string;
  content: string;
}

const fetchPosts = async (page?: number): Promise<Post[]> => {
  const response = await fetch(
    `http://localhost:3000/posts?_sort=-id${
      page ? `&_page=${page}&_per_page=5` : ""
    }`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch posts. Status: ${response.status}`);
  }

  const postData = await response.json();
  return postData;
};

const fetchTags = async (): Promise<string[]> => {
  const response = await fetch("http://localhost:3000/tags");
  const tagsData = await response.json();
  return tagsData;
};

const addPost = async (post: Post): Promise<Post> => {
  const response = await fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });

  const addedPost = await response.json();
  return addedPost;
};

export { fetchPosts, fetchTags, addPost };

export const deleteTodo = async (id: number): Promise<void> => {
  await axios.delete(`${API_BASE_URL}/${id}`);
};
