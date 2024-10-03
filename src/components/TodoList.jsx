import React, { useState } from "react";
import TodoItem from "./TodoItems";

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      id: Math.random().toString(36).substring(2, 15),
      text: "Buy groceries",
      completed: false,
    },
    {
      id: Math.random().toString(36).substring(2, 15),
      text: "Clean the house",
      completed: true,
    },
  ]);

  const addTodo = (text) => {
    const trimmedText = text.trim();
    if (trimmedText) {
      setTodos([
        ...todos,
        {
          id: Math.random().toString(36).substring(2, 15),
          text: trimmedText,
          completed: false,
        },
      ]);
    }
  };

  const toggleCompleted = (todo) => {
    setTodos(
      todos.map((item) =>
        item.id === todo.id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const deleteTodo = (todo) => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  return (
    <div className="p-12 bg-gradient-to-r from-green-600 to-blue-400 backdrop-blur-md md:backdrop-blur-lg min-h-[100vh]">
      <h1 className="text-3xl font-bold text-center mb-4">
        To-Do List By{" "}
        <a
          href="https://github.com/lalitjakhar"
          className="no-underline text-blue-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jakhar
        </a>
      </h1>
      <div className="flex mb-4 justify-center">
        <input
          type="text"
          className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-3/4 lg:w-1/2"
          placeholder="Add a new task"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTodo(e.target.value);
              e.target.value = "";
            }
          }}
        />
      </div>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggleCompleted={toggleCompleted}
            onDelete={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
