import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({ task, toggleComplete, deleteTodo }) => {
  const [completed, setCompleted] = useState(task.completed);

  useEffect(() => {
    // Cập nhật trạng thái khi prop thay đổi
    setCompleted(task.completed);
  }, [task.completed]);

  const handleToggleComplete = () => {
    toggleComplete(task.id);
  };

  const handleTodoClick = () => {
    setCompleted(!completed);
    handleToggleComplete();
  };

  return (
    <div
      className={`Todo ${completed ? "completed" : ""}`}
      onClick={handleTodoClick}
    >
      <p>{task.task}</p>
      <div className="deleteIconContainer" onClick={() => deleteTodo(task.id)}>
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  );
};
