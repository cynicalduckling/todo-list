"use client";

import Login from "@/components/Login";
import { useState } from "react";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Tasks from "@/components/Tasks";
import TasksPage from "@/components/TasksPage";

const App = () => {
  const [username, setUsername] = useState({
    username: localStorage.getItem("location")?.length
      ? localStorage.getItem("location")
      : "",
    searchVisible: true,
  });

  const [search, setSearch] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername({ username: "", searchVisible: false });
    setSearch(true);
  };

  const [tasks, setTasks] = useState([]);

  return (
    <div className="dark:text-white">
      <ThemeSwitcher />
      <Login
        username={username.username}
        setUsername={setUsername}
        handleSubmit={handleSubmit}
      />
      <TasksPage>
        <Tasks />
      </TasksPage>
    </div>
  );
};

export default App;
