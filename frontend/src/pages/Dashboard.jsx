import { useEffect, useState } from "react";
import { API } from "../api";
import "../App.css";

export default function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (user) {
      fetchProjects();
      fetchTasks();
    }
  }, []);

  const fetchProjects = async () => {
    const res = await API.get(`/projects/${user.id}`);
    setProjects(res.data);
  };

  const fetchTasks = async () => {
    const res = await API.get(`/tasks/${user.id}`);
    setTasks(res.data);
  };

  const createProject = async () => {
    const name = prompt("Enter project name");
    if (!name) return;

    await API.post("/projects", {
      name,
      userId: user.id,
    });

    fetchProjects();
  };

  const createTask = async () => {
    const title = prompt("Enter task name");
    if (!title) return;

    await API.post("/tasks", {
      title,
      userId: user.id,
    });

    fetchTasks();
  };

  const markDone = async (id) => {
    await API.put(`/tasks/${id}`, { status: "completed" });
    fetchTasks();
  };

  return (
    <div className="container">
      <h1>Dashboard</h1>

      <button onClick={createProject}>+ Project</button>
      <button onClick={createTask} style={{ marginLeft: "10px" }}>
        + Task
      </button>

      <h2>Projects</h2>
      {projects.map((p) => (
        <div className="card" key={p.id}>
          {p.name}
        </div>
      ))}

      <h2>Tasks</h2>
      {tasks.map((t) => (
        <div className="card" key={t.id}>
          <h3>{t.title}</h3>
          <p>Status: {t.status}</p>

          {t.status !== "completed" && (
            <button onClick={() => markDone(t.id)}>Mark Done</button>
          )}
        </div>
      ))}
    </div>
  );
}