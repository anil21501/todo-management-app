import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  const addTask = () => {
    fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    })
      .then((res) => res.json())
      .then((newTask) => {
        setTasks([...tasks, newTask]);
        setTitle("");
      });
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Todo Management App</h1>

      <input
        type="text"
        placeholder="Enter Task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} - {task.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;