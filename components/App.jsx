"use client";
import dynamic from "next/dynamic";
import { getTasks } from "@/actions";

const ThemeSwitcher = dynamic(() => import("@/components/ThemeSwitcher"), {
  ssr: false,
});

const App = () => {
  return (
    <div className="dark:text-white">
      <ThemeSwitcher />
      <form
        action={getTasks}
        className="h-[300px] w-[300px] flex flex-col justify-center items-center"
      >
        <input
          className="self-stretch placeholder-black dark:placeholder-white bg-transparent border border-black dark:border-white rounded-full px-4 h-10 mb-4"
          type="text"
          name="username"
          required
          placeholder="enter your username"
        />
        <button className="btn">submit</button>
      </form>
    </div>
  );
};

export default App;
