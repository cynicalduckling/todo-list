"use server";

import TodoApp from "@/components/TodoApp";

const Todo = async ({ params }) => {
  let todos = [];
  const url =
    "http://127.0.0.1:3000" +
    "/api/tasks?" +
    new URLSearchParams({ userid: params.userid });
  // console.log(url);
  if (params.userid !== "favicon.ico") {
    const res = await fetch(url, { method: "GET", cache: "no-cache" });
    todos = await res.json();
  }

  return (
    <main className="flex max-w-[1400px] items-center justify-center gap-8 border bg-gradient-to-tl from-pink-300 via-purple-300 to-indigo-400 px-8 py-12 dark:bg-gradient-to-t dark:from-gray-700 dark:via-gray-900 dark:to-black">
      <TodoApp
        todos={todos.tasks}
        username={todos.username}
        userid={params.userid}
      />
    </main>
  );
};

export default Todo;
