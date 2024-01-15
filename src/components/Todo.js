import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({ task, toggleComplete, deleteTodo }) => {
    return (
        <div className="Todo">
            <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : ""}`}>{task.task}</p>
            <div className="deleteIconContainer" onClick={() => deleteTodo(task.id)}>
                <FontAwesomeIcon icon={faTrash} />
            </div>
        </div>
    )
}