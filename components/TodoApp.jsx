"use client";
import { useState, useRef } from "react";
import Task from "@/components/Task";
import Tasks from "@/components/Tasks";
import ThemeSwitcher from "./ThemeSwitcher";
import { TypeAnimation } from "react-type-animation";
import { IoMdAddCircle } from "react-icons/io";
import AddTask from "./AddTask";
import HomeIcon from "./HomeIcon";

const TodoApp = ({ todos, username, userid }) => {
  const todosSorter = (todo1, todo2) => {
    return todo1.due_date - todo2.due_date;
  };
  todos.sort(todosSorter);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const searchCopy = useRef([...todos]);
  const [add, setAdd] = useState(false);

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
  } else if (filter === "work") {
    todos = todos.filter((todo) => {
      return todo.category === "work";
    });
  } else if (filter === "personal") {
    todos = todos.filter((todo) => {
      return todo.category === "personal";
    });
  }

  return (
    <div className="flex grow flex-col items-center justify-start gap-6">
      <ThemeSwitcher />
      <HomeIcon />
      <div className="flex items-center gap-2 text-center text-2xl font-bold text-black dark:text-white">
        <IoMdAddCircle
          onClick={() => {
            setAdd(!add);
          }}
          className="h-10 w-10 fill-black dark:fill-white"
        />
        hello
        <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text  text-transparent">
          <TypeAnimation sequence={[100, username]} speed={5} />
        </span>
      </div>
      <div className=" flex min-w-[330px] max-w-[700px] flex-col gap-6 self-stretch md:w-[600px] md:self-auto">
        <div className="flex self-stretch">
          <input
            className="search flex h-10 grow place-content-center self-stretch rounded-full bg-white px-8 text-black placeholder:text-center dark:border dark:border-white dark:bg-transparent dark:text-white dark:placeholder-white"
            type="search"
            name="search"
            id="search"
            placeholder="search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap justify-evenly gap-4 self-stretch md:flex-nowrap">
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
          <div
            onClick={() => setFilter("personal")}
            className="btn flex-1 grow"
          >
            Personal
          </div>
          <div onClick={() => setFilter("work")} className="btn flex-1 grow">
            Work
          </div>
        </div>
      </div>
      {add && <AddTask userid={userid} setAdd={setAdd} />}
      <Tasks className="mt-2 flex min-w-[330px] flex-col items-center gap-6 pb-6 md:flex-row md:flex-wrap md:justify-evenly">
        {todos.map((todo) => {
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
    </div>
  );
};

export default TodoApp;
