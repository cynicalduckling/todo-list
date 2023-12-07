"use server";

import TodoApp from "@/components/TodoApp";

const Todo = () => {
  return (
    <div className="flex min-h-screen grow flex-col items-center justify-center gap-4  bg-gradient-to-tl from-pink-300 via-purple-300 to-indigo-400 px-8 py-16 dark:bg-gradient-to-t dark:from-gray-700 dark:via-gray-900 dark:to-black">
      <TodoApp />
    </div>
  );
};

export default Todo;
