"use client";
import { useEffect, useState, useRef } from "react";
import Task from "@/components/Task";
import Tasks from "@/components/Tasks";
import ThemeSwitcher from "./ThemeSwitcher";
import { TypeAnimation } from "react-type-animation";

const TodoApp = ({ todos, username, userid }) => {
  const todosSorter = (todo1, todo2) => {
    return todo1.due_date - todo2.due_date;
  };
  todos.sort(todosSorter);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const searchCopy = useRef([...todos]);
  // console.log("search cop ", searchCopy.current);

  if (search.length) {
    const newTodos = searchCopy.current.filter((todo) => {
      return todo.name.toLowerCase().includes(search.toLowerCase());
    });
    todos = [...newTodos];
  }

  if (filter === "today") {
    todos = todos.filter((todo) => {
      return (
        new Date().toDateString() ===
        new Date(todo.due_date * 1000).toDateString()
      );
    });
  } else if (filter === "completed") {
    todos = todos.filter((todo) => {
      return todo.completed === true;
    });
  }

  console.log(todos[1]);

  return (
    <>
      <ThemeSwitcher />
      <div className="flex h-[300px] flex-col items-center justify-evenly self-stretch">
        <div className="self-stretch text-center text-3xl font-bold text-black dark:text-white">
          hello{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text  text-transparent">
            <TypeAnimation sequence={[100, username]} speed={5} />
          </span>
        </div>
        <div className="flex self-stretch">
          <input
            className="search flex h-10 grow place-content-center rounded-full bg-white px-8 text-black placeholder:text-center dark:border dark:border-white dark:bg-transparent dark:text-white dark:placeholder-white"
            type="search"
            name="search"
            id="search"
            placeholder="search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex justify-evenly gap-8 self-stretch">
          <div onClick={() => setFilter("all")} className="btn flex-1 grow">
            All
          </div>
          <div onClick={() => setFilter("today")} className="btn flex-1 grow">
            Today
          </div>
          <div
            onClick={() => setFilter("completed")}
            className="btn flex-1 grow"
          >
            Completed
          </div>
        </div>
      </div>
      <Tasks className="flex grow-[2] flex-col flex-wrap items-center justify-start gap-8 self-stretch lg:flex-row">
        {todos.map((todo) => {
          // console.log(todo._id);
          return (
            <Task
              userid={userid}
              key={todo._id}
              taskId={todo._id}
              task={{
                name: todo.name,
                due_date: todo.due_date,
                completed: todo.completed,
                category: todo.category,
              }}
            />
          );
        })}
      </Tasks>
    </>
  );
};

export default TodoApp;
