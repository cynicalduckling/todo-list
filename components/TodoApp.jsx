"use client";
import Task from "@/components/Task";
import Tasks from "@/components/Tasks";
import ThemeSwitcher from "./ThemeSwitcher";
import { usePathname } from "next/navigation";

const TodoApp = () => {
  const pathname = usePathname();
  return (
    <>
      <ThemeSwitcher />
      <div className="flex grow flex-col items-center justify-evenly self-stretch rounded-[30px]">
        <div className="self-stretch text-center text-3xl font-bold">
          hello <span className="text-white">{pathname.replace("/", "")}</span>
        </div>
        <div className="flex self-stretch">
          <input
            className="search flex h-10 grow place-content-center rounded-full bg-white px-8 text-black placeholder:text-center dark:border dark:border-white dark:bg-transparent dark:text-white dark:placeholder-white"
            type="search"
            name="search"
            id="search"
            placeholder="search"
          />
        </div>
        <div className="flex justify-evenly gap-8 self-stretch">
          <div className="btn flex-1 grow">All</div>
          <div className="btn flex-1 grow">Today</div>
          <div className="btn flex-1 grow">Completed</div>
        </div>
      </div>
      <Tasks className="flex grow-[2] flex-col items-center justify-start gap-8 self-stretch rounded-[30px]">
        <Task
          task={{
            name: "wash the carsds and chicken and cards and chicken and chicken andnashas as as as a s  as  a s  a s a s  as  a s as",
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
