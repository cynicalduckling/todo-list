"use server";

import TodoApp from "@/components/TodoApp";

const Todo = async ({ params }) => {
  // console.log("params ---->", params);
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
    <div className="flex min-h-screen min-w-full items-center justify-center gap-4 border  bg-gradient-to-tl from-pink-300 via-purple-300 to-indigo-400 px-8 py-16 dark:bg-gradient-to-t dark:from-gray-700 dark:via-gray-900 dark:to-black">
      <main className="flex max-w-[1450px] flex-col items-center gap-8 border">
        <TodoApp
          todos={todos.tasks}
          username={todos.username}
          userid={params.userid}
        />
      </main>
    </div>
  );
};

export default Todo;
