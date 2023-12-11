"use client";
import { getOrCreateUser } from "@/actions";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { UsernameSchema } from "@/models/zodschemas";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const validateUser = async (formData) => {
    const username = formData.get("username");
    const usernameCheck = UsernameSchema.safeParse(username);
    if (!usernameCheck.success) {
      setError(
        usernameCheck.error.issues.map((issue) => issue.message).join(" and "),
      );
    } else {
      setError(null);
      setLoading(true);
      const response = await getOrCreateUser(usernameCheck.data);

      response?.error && setError(response.error);
    }
  };

  return (
    <div className=" dark:text-white">
      <ThemeSwitcher />
      <div className="min-h-4 mb-2 max-w-[300px] flex-wrap text-center text-sm lowercase text-red-500">
        {error && error}
      </div>
      <form
        action={validateUser}
        className="flex w-[300px] flex-col items-center justify-center"
      >
        <input
          className="mb-4 h-10 self-stretch rounded-full border border-black bg-transparent px-4 lowercase placeholder-black dark:border-white dark:placeholder-white"
          type="text"
          name="username"
          placeholder="enter your username"
        />
        <button className="btn">
          {loading && (
            <AiOutlineLoading3Quarters className="mr-2 animate-spin" />
          )}
          submit
        </button>
      </form>
    </div>
  );
};

export default App;
