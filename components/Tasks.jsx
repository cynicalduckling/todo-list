"use client";
import Task from "./Task";
import { tasks } from "@/lib/tasks";

const Tasks = () => {
  return (
    <div>
      <div className="text-center mb-4">Tasks</div>
      {tasks.map((task) => {
        return <Task className="mb-2 text-center" key={task.id} task={task} />;
      })}
    </div>
  );
};
export default Tasks;
