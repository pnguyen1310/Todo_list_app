import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { Todo } from './Todo';
import { v4 as uuidv4 } from 'uuid';
uuidv4();

export const ToDoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const deleteAllTodos = () => {
    setTodos([]);
  };

  const pendingTasks = todos.filter(todo => !todo.completed).length;

  return (
    <div className='TodoWrapper'>
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
      ))}
      <div className="pendingTasksContainer">
        <p className="pendingTasks">You have {pendingTasks} pending tasks</p>
        {pendingTasks > 0 && (
          <button className="deleteAllButton" onClick={deleteAllTodos}>Delete All</button>
        )}
      </div>
    </div>
  );
};