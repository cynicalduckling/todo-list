import { useState, useEffect, useRef } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    setTheme(localStorage.getItem("theme") || "dark");
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="fixed left-2 top-2" onClick={handleClick}>
      {theme === "dark" ? (
        <MdDarkMode className="h-10 w-10 fill-white" />
      ) : (
        <MdOutlineLightMode className="h-10 w-10 stroke-black" />
      )}
    </div>
  );
};

export default ThemeSwitcher;
