"use client";
import { getTasks } from "@/actions";
import ThemeSwitcher from "./ThemeSwitcher";

const App = () => {
  return (
    <div className="dark:text-white">
      <ThemeSwitcher />
      <form
        action={getTasks}
        className="flex h-[300px] w-[300px] flex-col items-center justify-center"
      >
        <input
          className="mb-4 h-10 self-stretch rounded-full border border-black bg-transparent px-4 placeholder-black dark:border-white dark:placeholder-white"
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
