"use client";

import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import { deleteTask, completeTask, updateTask } from "@/actions";
import { FaSync } from "react-icons/fa";
import TextareaAutosize from "react-textarea-autosize";

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

  const [pulse, setPulse] = useState(false);

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
    <div className="flex justify-between gap-4 self-stretch rounded-xl bg-white p-4 shadow-sm shadow-black dark:bg-transparent dark:shadow-none md:min-w-[355px] md:max-w-[35%]">
      <div className="flex flex-col gap-1">
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
            <FaRegCheckCircle className="h-6 w-6 fill-black dark:fill-white" />
          ) : (
            <FaRegCircle className="h-6 w-6 fill-black dark:fill-white" />
          )}
        </div>
        <div className="grow rounded-xl bg-black dark:bg-white"></div>
      </div>
      <form className="flex grow flex-col items-start justify-evenly gap-2 ">
        <TextareaAutosize
          type="text"
          className="flex h-auto break-words bg-transparent font-bold text-black dark:text-white"
          value={taskDetails.name.toUpperCase()}
          onChange={(e) => {
            setTaskDetails({ ...taskDetails, name: e.target.value });
            setPulse(true);
          }}
        />
        <div className="flex max-w-[300px] justify-start">
          <input
            type="date"
            value={new Date(taskDetails.due_date).toLocaleDateString("en-CA")}
            className="flex flex-1 grow justify-between bg-transparent text-black dark:text-white"
            onChange={(e) => {
              setTaskDetails({
                ...taskDetails,
                due_date: Date.parse(e.target.value),
              });
              setPulse(true);
            }}
          />
          <div className="flex-1 grow text-right">
            <select
              name="category"
              className="bg-transparent text-black dark:text-white"
              defaultValue={taskDetails.category}
              onChange={(e) => {
                setTaskDetails({
                  ...taskDetails,
                  category: e.target.value,
                });
                setPulse(true);
              }}
            >
              <option
                value="personal"
                className="gg-transparent text-black dark:text-white"
              >
                Personal
              </option>
              <option
                value="work"
                className="gg-transparent text-black dark:text-white"
              >
                Work
              </option>
            </select>
          </div>
        </div>
      </form>

      <div className="flex cursor-pointer flex-col items-center gap-1">
        <FaSync
          onClick={() => {
            {
              updateTask(taskDetails);
              setPulse(false);
            }
          }}
          className={`h-5 w-5 fill-black stroke-black dark:fill-white
        dark:stroke-white ${pulse && "animate-bounce"}`}
        />
        <div className="grow self-stretch rounded-xl bg-black dark:bg-white"></div>
        <FaCircleXmark
          onClick={() => deleteTask(taskId, userid)}
          className="h-5 w-5 fill-black dark:fill-white"
        />
      </div>
    </div>
  );
};

export default Task;
