"use client";

import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import { deleteTask, completeTask, updateTask } from "@/actions";
import { RxUpdate } from "react-icons/rx";

const Task = ({ task, taskId, userid }) => {
  let render = useRef(0);
  const [taskDetails, setTaskDetails] = useState({
    taskId,
    userid,
    name: task.name,
    due_date: task.due_date,
    category: task.category,
    completed: task.completed,
  });
  const [completed, setCompleted] = useState({
    completed: task.completed,
    taskId: taskId,
    userid: userid,
  });

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      render.current = render.current + 1;
      if (render.current > 2) {
        completeTask(completed);
      }
    } else {
      completeTask(completed);
    }
  }, [completed]);

  console.log(taskDetails.category);

  return (
    <>
      <div className="relative flex min-h-[60px] items-center gap-8 self-stretch drop-shadow-lg dark:text-white lg:max-w-[10%]">
        <div className="flex flex-col gap-1 self-stretch">
          <div className="grow rounded-xl bg-black dark:bg-white"></div>
          <div
            onClick={() => {
              setCompleted({
                ...completed,
                completed: !completed.completed,
              });
            }}
          >
            {task.completed ? (
              <FaRegCheckCircle className="h-6 w-6" />
            ) : (
              <FaRegCircle className="h-6 w-6" />
            )}
          </div>
          <div className="grow rounded-xl bg-black dark:bg-white"></div>
        </div>
        <form className="flex flex-col flex-wrap justify-between gap-2 lg:flex-1">
          <input
            type="text"
            className=" flex grow break-normal bg-transparent font-bold text-black dark:text-white"
            value={taskDetails.name.toUpperCase()}
            onChange={(e) =>
              setTaskDetails({ ...taskDetails, name: e.target.value })
            }
          />
          <div className="flex justify-between ">
            <input
              type="date"
              value={new Date(taskDetails.due_date).toLocaleDateString("en-CA")}
              className="flex flex-1 grow justify-between bg-transparent text-black dark:text-white"
              onChange={(e) =>
                setTaskDetails({
                  ...taskDetails,
                  due_date: Date.parse(e.target.value),
                })
              }
            />
            <div className="flex-1 grow text-right">
              <select
                name="category"
                className="bg-transparent"
                defaultValue={taskDetails.category}
                onChange={(e) =>
                  setTaskDetails({
                    ...taskDetails,
                    category: e.target.value,
                  })
                }
              >
                <option value="personal">Personal</option>
                <option value="work">Work</option>
              </select>
            </div>
          </div>
        </form>
        <div className="flex cursor-pointer flex-col items-center gap-1 self-stretch">
          <RxUpdate
            onClick={() => {
              updateTask(taskDetails);
            }}
            className="h-6 w-6 stroke-black dark:stroke-white"
          />
          <div className="grow rounded-xl bg-black dark:bg-white"></div>
          <FaCircleXmark
            onClick={() => deleteTask(taskId, userid)}
            className="h-6 w-6  dark:stroke-white"
          />
        </div>
      </div>
      <div className="h-[1px] w-[300px] bg-gray-500 md:hidden"></div>
    </>
  );
};

export default Task;
