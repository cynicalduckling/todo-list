"use server";

import TodoApp from "@/components/TodoApp";

const Todo = async ({ params }) => {
  let todos = [];
  console.log(
    "first log",
    "http://" + process.env.HOST || "https://" + process.env.VERCEL_URL,
  );
  const url =
    ("http://" + process.env.HOST || "https://" + process.env.VERCEL_URL) +
    "/api/tasks?" +
    new URLSearchParams({ userid: params.userid });
  console.log("fullurl ---->  ", url);
  if (params.userid !== "favicon.ico") {
    const res = await fetch(url, { method: "GET", cache: "no-cache" });
    todos = await res.json();
  }

  return (
    <main className="flex min-h-screen min-w-full items-center justify-center gap-8 bg-gradient-to-r from-teal-200 to-lime-200 px-8 pt-24  dark:bg-gradient-to-t dark:from-gray-700 dark:via-gray-900 dark:to-black">
      <section className="min-h-screen max-w-[1400px]">
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
