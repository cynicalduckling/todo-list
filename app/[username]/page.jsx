"use server";

import TodoApp from "@/components/TodoApp";
import { headers } from "next/headers";

const Todo = async ({ params }) => {
  let todos = [];
  const url =
    "http://127.0.0.1:3000" +
    "/api/tasks?" +
    new URLSearchParams({ userid: params.userid });
  console.log(url);
  if (params.userid !== "favicon.ico") {
    const res = await fetch(url, { method: "GET", cache: "no-store" });
    todos = await res.json();
  }
  return (
    <div className="flex min-h-screen grow flex-col items-center justify-center gap-4  bg-gradient-to-tl from-pink-300 via-purple-300 to-indigo-400 px-8 py-16 dark:bg-gradient-to-t dark:from-gray-700 dark:via-gray-900 dark:to-black">
      <TodoApp todos={todos.tasks} username={todos.username} />
    </div>
  );
};

export default Todo;
