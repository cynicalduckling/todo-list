"use client";

import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";

const Task = ({ task }) => {
  return (
    <div
      className="flex min-h-[60px] items-center gap-8 self-stretch rounded-full px-8 drop-shadow-lg dark:border dark:border-white dark:bg-transparent dark:text-white"
      action=""
    >
      <div className="flex gap-4">
        {task.completed ? <FaRegCheckCircle /> : <FaRegCircle />}
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex">{task.name}</div>
        <div>
          {new Date(task.due_date).toLocaleDateString("en-CA")}
          {task.category.toUpperCase()}
        </div>
      </div>
    </div>
  );
};

export default Task;
