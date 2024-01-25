import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({ task, toggleComplete, deleteTodo }) => {
  const [completed, setCompleted] = useState(false);

  const handleToggleComplete = () => {
    toggleComplete(task.id);
    setCompleted(!completed);
  };

  const handleTodoClick = () => {
    setCompleted(!completed);
  };

  return (
    <div
      className={`Todo ${completed ? "completed" : ""}`}
      onClick={handleTodoClick}
    >
      <p onClick={handleToggleComplete}>{task.task}</p>
      <div className="deleteIconContainer" onClick={() => deleteTodo(task.id)}>
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  );
};