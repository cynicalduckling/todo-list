"use client";

import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";

const Task = ({ task }) => {
  return (
    <div
      className="relative flex min-h-[60px] items-center gap-8 self-stretch rounded-3xl  drop-shadow-lg dark:text-white"
      draggable={true}
    >
      <div className="flex flex-col gap-1 self-stretch">
        <div className="grow rounded-xl bg-black dark:bg-white"></div>
        <div>
          {task.completed ? (
            <FaRegCheckCircle className="h-6 w-6" />
          ) : (
            <FaRegCircle className="h-6 w-6" />
          )}
        </div>
        <div className="grow rounded-xl bg-black dark:bg-white"></div>
      </div>
      <div className="flex grow flex-col justify-between gap-2">
        <div className="flex font-bold">{task.name.toUpperCase()}</div>
        <div className="flex justify-between">
          {new Date(task.due_date).toLocaleDateString("en-CA")}
          <div>{task.category.toUpperCase()}</div>
        </div>
      </div>
      <div onClick={null} className="flex flex-col gap-1 self-stretch">
        <div className="grow rounded-xl border bg-black dark:bg-white"></div>
        <FaCircleXmark className="h-6 w-6 stroke-black dark:stroke-white" />
      </div>
    </div>
  );
};

export default Task;
