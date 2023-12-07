"use client";

const Task = ({ task }) => {
  return (
    <div
      className="flex min-h-[60px] items-center justify-evenly self-stretch rounded-full bg-white px-2 shadow-sm shadow-white drop-shadow-md dark:border-white dark:bg-black"
      action=""
    >
      <div className="flex gap-4">{task.completed.toString()}</div>
      <div className="flex flex-col justify-between">
        <div className="flex">{task.name}</div>
        <div>
          {new Date(task.due_date).toLocaleDateString("en-CA")}
          {task.category.toUpperCase()}
        </div>
      </div>
      dialogu
    </div>
  );
};

export default Task;
