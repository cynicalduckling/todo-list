"use client";
import Task from "@/components/Task";
import Tasks from "@/components/Tasks";
import ThemeSwitcher from "./ThemeSwitcher";

const TodoApp = () => {
  return (
    <>
      <ThemeSwitcher />
      <div className="dark: flex grow flex-col items-center justify-evenly self-stretch rounded-[30px] border border-black">
        <div>
          <input type="search" name="" id="" />
        </div>
        <div className="flex justify-evenly gap-8">
          <div>All</div>
          <div>Today</div>
          <div>Completed</div>
        </div>
      </div>
      <Tasks className="flex grow-[2] flex-col items-center justify-start gap-8 self-stretch rounded-[30px]">
        <Task
          task={{
            name: "wash the car",
            due_date: Date.now(),
            completed: false,
            category: "personal",
          }}
        />
        <Task
          task={{
            name: "dance the car",
            due_date: Date.now(),
            completed: true,
            category: "work",
          }}
        />
      </Tasks>
    </>
  );
};

export default TodoApp;
