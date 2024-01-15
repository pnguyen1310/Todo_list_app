import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (value.trim() !== "") {
            addTodo(value);
            setValue("");
        }
    };

    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input
                type="text"
                className='todo-input'
                value={value}
                placeholder="Add your new todo"
                onChange={(e) => setValue(e.target.value)}
            />
            <button className="todo-btn" type="submit">
                <FontAwesomeIcon icon={faPlus} style={{ fontSize: "1.5rem", verticalAlign: "middle" }} />
            </button>
        </form>
    );
};
