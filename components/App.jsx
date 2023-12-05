"use client";

import Login from "./Login";
import { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import Tasks from "./Tasks";
import TasksPage from "./TasksPage";

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
      {username.searchVisible && (
        <Login
          username={username.username}
          setUsername={setUsername}
          handleSubmit={handleSubmit}
        />
      )}
      <TasksPage>
        <Tasks />
      </TasksPage>
    </div>
  );
};

export default App;
