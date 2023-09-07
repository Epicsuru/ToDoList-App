// src/components/Task.js
import React from "react";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.completed ? "completed" : ""}`}>
      <h3>{task.text}</h3>
      <div className="buttons">
        <button className="toggle-btn" onClick={() => onToggle(task.id)}>
          {task.completed ? "Unmark" : "Mark"}
        </button>
        <button className="delete-btn" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
