// src/App.js
import React, { useState } from "react";
import TaskList from "./TaskList";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Learn React",
      completed: false,
    },
    {
      id: 2,
      text: "Build a to-do app",
      completed: false,
    },
    {
      id: 3,
      text: "Design complete website",
      completed: false,
    },
    {
      id: 4,
      text: "Gardening",
      completed: true,
    },
    {
      id: 5,
      text: "Practice Aptitude",
      completed: false,
    },
  ]);

  const addTask = (text) => {
    const newTask = {
      id: tasks.length + 1,
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} />
      <input
        type="text"
        placeholder="Add a new task..."
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            addTask(e.target.value);
            e.target.value = "";
          }
        }}
      />
    </div>
  );
}

export default App;
