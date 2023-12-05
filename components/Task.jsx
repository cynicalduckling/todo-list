"use client";

const Task = ({ task, className }) => {
  return (
    <div className={className}>
      <div>{task.name}</div>
      <div>{task.due_date}</div>
      <div>{task.category}</div>
    </div>
  );
};

export default Task;
