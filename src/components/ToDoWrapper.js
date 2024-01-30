import React, { useState, useEffect } from "react";
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";
import { v4 as uuidv4 } from 'uuid';

export const ToDoWrapper = () => {
  const [todos, setTodos] = useState([]);

  // Effect hook để load dữ liệu từ localStorage khi component được mount
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  // Effect hook để cập nhật localStorage khi todos thay đổi
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
  };

  const toggleComplete = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const deleteAllTodos = () => {
    setTodos([]);
  };

  const pendingTasks = todos.filter(todo => !todo.completed).length;

  return (
    <div className='TodoWrapper'>
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <div className="TodoList">
        {todos.map((todo) => (
          <Todo
            task={todo}
            key={todo.id}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
      <div className="pendingTasksContainer">
        <p className="pendingTasks">You have {pendingTasks} pending tasks</p>
        {pendingTasks > 0 && (
          <button className="deleteAllButton" onClick={deleteAllTodos}>
            Clear All
          </button>
        )}
      </div>
    </div>
  );
};
