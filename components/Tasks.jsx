"use client";

import Task from "./Task";
import { tasks } from "@/lib/tasks";

const Tasks = () => {
  console.log(tasks);
  return (
    <div>
      <div>Tasks</div>
      {tasks.map((task) => {
        return <Task className="mb-2 text-center" key={task.id} task={task} />;
      })}
    </div>
  );
};
//test
export default Tasks;
