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
    <main className="flex min-h-screen min-w-full items-center justify-center gap-8 bg-gradient-to-r from-teal-200 to-lime-200 px-8 py-12  dark:bg-gradient-to-t dark:from-gray-700 dark:via-gray-900 dark:to-black">
      <section className="max-w-[1400px]">
        <TodoApp
          todos={todos.tasks}
          username={todos.username}
          userid={params.userid}
        />
      </section>
    </main>
  );
};

export default Todo;
